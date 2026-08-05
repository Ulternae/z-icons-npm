import path from 'path';
import {
  getDefaultVariant,
  getPublicVariantSuffix,
  getVariantFileSuffix,
  iconConfig as CONFIG,
} from '../icon-config.js';
import { createOutputWriter } from './fs-utils.js';
import { createIconTypeDefinitions } from './icon-types.js';
import { capitalize } from './naming.js';
import { createSvgSprite, escapeJsString } from './svg-utils.js';

function createWebElementRuntime() {
  return `const DEFAULT_OPTIONS = {
  defaultVariant: 'light',
  defaultVariants: undefined,
  fallbackVariant: undefined,
  fallbackPack: undefined,
  fallbackIcon: undefined,
  inputVariant: undefined,
  missing: 'null',
};

function normalizeRegistry(registry, inputVariant) {
  if (!inputVariant) {
    return registry;
  }

  return Object.fromEntries(
    Object.entries(registry).map(([pack, packIcons]) => [
      pack,
      {
        [inputVariant]: packIcons,
      },
    ])
  );
}

function resolveSvg(registry, type, name, variant, fallbackVariant, fallbackPack) {
  const candidates = [
    [type, variant],
    fallbackVariant ? [type, fallbackVariant] : undefined,
    fallbackPack ? [fallbackPack, variant] : undefined,
    fallbackPack && fallbackVariant ? [fallbackPack, fallbackVariant] : undefined,
  ].filter(Boolean);

  for (const [pack, currentVariant] of candidates) {
    const svg = registry[pack]?.[currentVariant]?.[name];

    if (typeof svg === 'string') {
      return svg;
    }
  }

  return undefined;
}

function handleMissingIcon({ type, name, variant, missing }) {
  const message = \`[z-icons] Missing icon: type="\${type}", name="\${name}", variant="\${variant}".\`;

  if (missing === 'error') {
    throw new Error(message);
  }

  const isProduction = typeof process !== 'undefined' && process.env?.NODE_ENV === 'production';

  if (missing === 'warn' && !isProduction) {
    console.warn(message);
  }

  return '';
}

function getSpriteSymbolId(type, name, variant, defaultVariant = 'light') {
  return \`\${type}-\${variant === defaultVariant ? name : \`\${name}-\${variant}\`}\`;
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function toCssSize(value) {
  if (value === null || value === undefined || value === '') {
    return undefined;
  }

  return /^\\\\d+(\\\\.\\\\d+)?$/.test(value) ? \`\${value}px\` : value;
}

function applyPresentation(svg, host) {
  const size = toCssSize(host.getAttribute('size'));
  const color = host.getAttribute('color');
  const className = host.getAttribute('svg-class');

  return svg.replace(/<svg\\\\b([^>]*)>/, (_, attrs) => {
    const extraAttrs = [
      size ? \` width="\${size}" height="\${size}"\` : '',
      color ? \` style="color: \${escapeAttribute(color)};"\` : '',
      className ? \` class="\${escapeAttribute(className)}"\` : '',
      host.hasAttribute('aria-hidden') ? ' aria-hidden="true"' : '',
      host.getAttribute('aria-label') ? \` aria-label="\${escapeAttribute(host.getAttribute('aria-label'))}"\` : '',
      host.getAttribute('role') ? \` role="\${escapeAttribute(host.getAttribute('role'))}"\` : '',
    ].join('');

    return \`<svg\${attrs}\${extraAttrs}>\`;
  });
}

function buildUseSvg(symbolId, host, href = \`#\${symbolId}\`) {
  const size = toCssSize(host.getAttribute('size'));
  const color = host.getAttribute('color');
  const className = host.getAttribute('svg-class');
  const attrs = [
    'viewBox="0 0 24 24"',
    size ? \`width="\${size}" height="\${size}"\` : '',
    color ? \`style="color: \${escapeAttribute(color)};"\` : '',
    className ? \`class="\${escapeAttribute(className)}"\` : '',
    host.hasAttribute('aria-hidden') ? 'aria-hidden="true"' : '',
    host.getAttribute('aria-label') ? \`aria-label="\${escapeAttribute(host.getAttribute('aria-label'))}"\` : '',
    host.getAttribute('role') ? \`role="\${escapeAttribute(host.getAttribute('role'))}"\` : '',
  ].filter(Boolean).join(' ');

  return \`<svg \${attrs}><use href="\${escapeAttribute(href)}"></use></svg>\`;
}

export function injectZIconSprite(spriteId, sprite) {
  if (typeof document === 'undefined') {
    return undefined;
  }

  const existing = document.querySelector(\`svg[data-zcorvus-sprite="\${spriteId}"]\`);

  if (existing) {
    return existing;
  }

  const template = document.createElement('template');
  template.innerHTML = sprite.trim();
  const element = template.content.firstElementChild;

  if (!element) {
    return undefined;
  }

  element.setAttribute('aria-hidden', 'true');
  element.setAttribute('data-zcorvus-sprite', spriteId);
  element.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
  document.body.prepend(element);

  return element;
}

export function createZIconElement(registry, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const normalizedRegistry = normalizeRegistry(registry, config.inputVariant);
  const fixedType = config.type;
  const fixedVariant = config.variant;
  const spriteMode = config.mode === 'sprite';
  const spriteOnlyMode = config.mode === 'sprite-only';
  const externalMode = config.mode === 'external';
  const spriteId = config.spriteId;
  const sprite = config.sprite;
  const symbolDefaultVariant = config.symbolDefaultVariant ?? config.defaultVariant;

  return class ZIconElement extends HTMLElement {
    static observedAttributes = [
      'type',
      'name',
      'variant',
      'size',
      'color',
      'svg-class',
      'sprite-url',
      'aria-hidden',
      'aria-label',
      'role',
    ];

    connectedCallback() {
      if ((spriteMode || spriteOnlyMode) && spriteId && sprite) {
        injectZIconSprite(spriteId, sprite);
      }

      this.render();
    }

    attributeChangedCallback() {
      this.render();
    }

    render() {
      const type = fixedType ?? this.getAttribute('type') ?? config.defaultType;
      const name = this.getAttribute('name');
      const variant = fixedVariant ?? this.getAttribute('variant') ?? config.defaultVariants?.[type] ?? config.defaultVariant;

      if (!type || !name) {
        this.innerHTML = '';
        return;
      }

      if (spriteOnlyMode) {
        const symbolId = getSpriteSymbolId(type, name, variant, symbolDefaultVariant);

        this.innerHTML = buildUseSvg(symbolId, this);
        return;
      }

      if (externalMode) {
        const spriteUrl = this.getAttribute('sprite-url') ?? config.spriteUrl;

        if (!spriteUrl) {
          this.innerHTML = '';
          return;
        }

        const symbolId = getSpriteSymbolId(type, name, variant, symbolDefaultVariant);

        this.innerHTML = buildUseSvg(symbolId, this, \`\${spriteUrl}#\${symbolId}\`);
        return;
      }

      const svg = resolveSvg(
        normalizedRegistry,
        type,
        name,
        variant,
        config.fallbackVariant,
        config.fallbackPack
      );

      if (svg) {
        if (spriteMode) {
          this.innerHTML = buildUseSvg(getSpriteSymbolId(type, name, variant, symbolDefaultVariant), this);
          return;
        }

        this.innerHTML = applyPresentation(svg, this);
        return;
      }

      if (config.fallbackIcon) {
        this.innerHTML = applyPresentation(config.fallbackIcon, this);
        return;
      }

      this.innerHTML = handleMissingIcon({ type, name, variant, missing: config.missing });
    }
  };
}

export function defineZIconElement(tagName, registry, options = {}) {
  if (typeof window === 'undefined' || !window.customElements || typeof HTMLElement === 'undefined') {
    return undefined;
  }

  const existing = window.customElements.get(tagName);

  if (existing) {
    return existing;
  }

  const Element = createZIconElement(registry, options);
  window.customElements.define(tagName, Element);

  return Element;
}
`;
}

function createWebElementTypes() {
  return `import type { IconPack, IconVariant } from './types/index.js';

export type SvgVariantMap = Record<string, string>;
export type SvgPackMap = Record<string, SvgVariantMap>;
export type SvgRegistry = Record<string, SvgPackMap>;
export type FlatSvgRegistry = Record<string, SvgVariantMap>;
export type MissingIconBehavior = 'null' | 'warn' | 'error';

export interface CreateZIconElementOptions {
  defaultType?: IconPack | string;
  defaultVariant?: IconVariant | string;
  defaultVariants?: Record<string, IconVariant | string>;
  fallbackVariant?: IconVariant | string;
  fallbackPack?: IconPack | string;
  fallbackIcon?: string;
  inputVariant?: IconVariant | string;
  missing?: MissingIconBehavior;
  mode?: 'inline' | 'sprite' | 'sprite-only' | 'external';
  sprite?: string;
  spriteId?: string;
  spriteUrl?: string;
  symbolDefaultVariant?: IconVariant | string;
  type?: IconPack | string;
  variant?: IconVariant | string;
}

export declare function createZIconElement(
  registry: SvgRegistry | FlatSvgRegistry,
  options?: CreateZIconElementOptions
): CustomElementConstructor;

export declare function defineZIconElement(
  tagName: string,
  registry: SvgRegistry | FlatSvgRegistry,
  options?: CreateZIconElementOptions
): CustomElementConstructor | undefined;

export declare function injectZIconSprite(spriteId: string, sprite: string): Element | undefined;
`;
}

export function buildWebPackage(icons, packData) {
  const distDir = path.join(CONFIG.packagesDir, 'icons-web', 'dist');
  const { writeFile, finish } = createOutputWriter(distDir);

  writeFile(path.join(distDir, 'create.js'), createWebElementRuntime());
  writeFile(path.join(distDir, 'create.d.ts'), createWebElementTypes());
  writeFile(path.join(distDir, 'types', 'index.js'), 'export {};\n');
  writeFile(path.join(distDir, 'types', 'index.d.ts'), createIconTypeDefinitions(packData));

  const rootImports = [];
  const rootRegistry = [];
  const rootDefaultVariants = CONFIG.packs.map((pack) => `  ${pack}: '${getDefaultVariant(pack)}'`).join(',\n');

  for (const pack of CONFIG.packs) {
    const variants = packData[pack] ?? {};
    const variantImports = [];
    const variantEntries = [];

    for (const [variant, variantIcons] of Object.entries(variants)) {
      const suffix = getPublicVariantSuffix(pack, variant);
      const registryName = `${pack}Icons${suffix}`;
      const fileName = `${pack}${getVariantFileSuffix(pack, variant)}`;
      const registry = `export const ${registryName} = {\n${variantIcons.map((icon) => `  '${icon.name}': '${escapeJsString(icon.svg)}'`).join(',\n')}\n};\n`;

      writeFile(path.join(distDir, 'data', `${fileName}.js`), registry);
      writeFile(
        path.join(distDir, 'data', `${fileName}.d.ts`),
        `export declare const ${registryName}: {\n${variantIcons.map((icon) => `  readonly '${icon.name}': string;`).join('\n')}\n};\n`
      );

      const spriteName = `${pack}Sprite${suffix}`;
      const sprite = createSvgSprite(pack, variant, variantIcons);
      writeFile(
        path.join(distDir, 'sprites', `${fileName}.js`),
        `export const ${spriteName} = '${escapeJsString(sprite)}';\nexport default ${spriteName};\n`
      );
      writeFile(
        path.join(distDir, 'sprites', `${fileName}.d.ts`),
        `export declare const ${spriteName}: string;\nexport default ${spriteName};\n`
      );
      writeFile(path.join(distDir, 'sprites', `${fileName}.svg`), sprite);

      variantImports.push(`import { ${registryName} } from './${fileName}.js';`);
      variantEntries.push(`  '${variant}': ${registryName}`);
    }

    const packRegistryName = `${pack}IconSet`;
    const packRegistryFileName = `${pack}-all`;
    writeFile(
      path.join(distDir, 'data', `${packRegistryFileName}.js`),
      `${variantImports.join('\n')}\n\nexport const ${packRegistryName} = {\n${variantEntries.join(',\n')}\n};\n`
    );
    writeFile(
      path.join(distDir, 'data', `${packRegistryFileName}.d.ts`),
      `export declare const ${packRegistryName}: Record<string, Record<string, string>>;\n`
    );
    rootImports.push(`import { ${packRegistryName} } from './data/${packRegistryFileName}.js';`);
    rootRegistry.push(`  ${pack}: ${packRegistryName}`);
  }

  writeFile(
    path.join(distDir, 'register.js'),
    `import { defineZIconElement } from './create.js';\n${rootImports.join('\n')}\n\nexport const zIconRegistry = {\n${rootRegistry.join(',\n')}\n};\n\nexport const zIconDefaultVariants = {\n${rootDefaultVariants}\n};\n\nexport const ZIconElement = defineZIconElement('z-icon', zIconRegistry, { defaultVariant: 'light', defaultVariants: zIconDefaultVariants });\n`
  );
  writeFile(
    path.join(distDir, 'register.d.ts'),
    `export declare const zIconRegistry: Record<string, Record<string, Record<string, string>>>;\nexport declare const zIconDefaultVariants: Record<string, string>;\nexport declare const ZIconElement: CustomElementConstructor | undefined;\n`
  );

  const rootExports = [
    `export { createZIconElement, defineZIconElement } from './create.js';`,
    `export type { CreateZIconElementOptions, FlatSvgRegistry, MissingIconBehavior, SvgPackMap, SvgRegistry, SvgVariantMap } from './create.js';`,
  ];

  for (const pack of CONFIG.packs) {
    const variants = packData[pack] ?? {};

    for (const [variant, variantIcons] of Object.entries(variants)) {
      const suffix = getPublicVariantSuffix(pack, variant);
      const variantFileSuffix = getVariantFileSuffix(pack, variant);
      const fileName = `register-${pack}${variantFileSuffix}`;
      const tagName = `z-${pack}${variantFileSuffix}`;
      const registryName = `${pack}Icons${suffix}`;
      const elementName = `Z${capitalize(pack)}${suffix}Element`;

      writeFile(
        path.join(distDir, `${fileName}.js`),
        `import { defineZIconElement } from './create.js';\nimport { ${registryName} } from './data/${pack}${variantFileSuffix}.js';\n\nexport { ${registryName} } from './data/${pack}${variantFileSuffix}.js';\nexport const ${elementName} = defineZIconElement('${tagName}', { ${pack}: { '${variant}': ${registryName} } }, { type: '${pack}', variant: '${variant}', defaultVariant: '${variant}' });\n`
      );
      writeFile(
        path.join(distDir, `${fileName}.d.ts`),
        `export declare const ${registryName}: {\n${variantIcons.map((icon) => `  readonly '${icon.name}': string;`).join('\n')}\n};\nexport declare const ${elementName}: CustomElementConstructor | undefined;\n`
      );

      const spriteFileName = `register-${pack}${variantFileSuffix}-sprite`;
      const spriteTagName = `z-${pack}${variantFileSuffix}-sprite`;
      const spriteName = `${pack}Sprite${suffix}`;
      const spriteAssetFileName = `${pack}${variantFileSuffix}`;
      const spriteElementName = `Z${capitalize(pack)}${suffix}SpriteElement`;

      writeFile(
        path.join(distDir, `${spriteFileName}.js`),
        `import { defineZIconElement } from './create.js';\nimport { ${spriteName} } from './sprites/${spriteAssetFileName}.js';\n\nexport { ${spriteName} } from './sprites/${spriteAssetFileName}.js';\nexport const ${spriteElementName} = defineZIconElement('${spriteTagName}', {}, { type: '${pack}', variant: '${variant}', defaultVariant: '${variant}', symbolDefaultVariant: '${getDefaultVariant(pack)}', mode: 'sprite-only', spriteId: '${pack}${variantFileSuffix}', sprite: ${spriteName} });\n`
      );
      writeFile(
        path.join(distDir, `${spriteFileName}.d.ts`),
        `export { ${spriteName} } from './sprites/${spriteAssetFileName}.js';\nexport declare const ${spriteElementName}: CustomElementConstructor | undefined;\n`
      );

      const externalFileName = `register-${pack}${variantFileSuffix}-external`;
      const externalTagName = `z-${pack}${variantFileSuffix}-external`;
      const externalElementName = `Z${capitalize(pack)}${suffix}ExternalElement`;

      writeFile(
        path.join(distDir, `${externalFileName}.js`),
        `import { defineZIconElement } from './create.js';\n\nexport const ${externalElementName} = defineZIconElement('${externalTagName}', {}, { type: '${pack}', variant: '${variant}', defaultVariant: '${variant}', symbolDefaultVariant: '${getDefaultVariant(pack)}', mode: 'external' });\n`
      );
      writeFile(
        path.join(distDir, `${externalFileName}.d.ts`),
        `export declare const ${externalElementName}: CustomElementConstructor | undefined;\n`
      );
    }
  }

  writeFile(path.join(distDir, 'index.js'), `${rootExports.filter((line) => !line.startsWith('export type')).join('\n')}\n`);
  writeFile(path.join(distDir, 'index.d.ts'), `${rootExports.join('\n')}\n`);
  return finish();
}
