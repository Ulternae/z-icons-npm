import path from 'path';
import {
  getDefaultVariant,
  getPublicVariantSuffix,
  getVariantFileSuffix,
  iconConfig as CONFIG,
  isFillIcon,
} from '../icon-config.js';
import { createOutputWriter } from './fs-utils.js';
import { capitalize, getVariantIconNameType, toPascalCase } from './naming.js';
import { parseSvg } from './svg-utils.js';

function createReactComponent(svgContent, componentName, pack, variant, sourceFile) {
  const { viewBox, children } = parseSvg(svgContent, sourceFile);
  const childrenCode = children.length > 0 ? `, ${children.join(', ')}` : '';
  const variantProps = isFillIcon(pack, variant)
    ? "fill: 'currentColor'"
    : "fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2";

  return `import React from 'react';

export const ${componentName} = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '${viewBox}',
    width: size,
    height: size,
    ${variantProps},
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }${childrenCode}
);

export default ${componentName};
`;
}

function createReactComponentTypes(componentName) {
  return `import React from 'react';

export interface ${componentName}Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const ${componentName}: React.FC<${componentName}Props>;
export default ${componentName};
`;
}

function createPackIconRuntime() {
  return `import React from 'react';

const SPRITE_ATTR = 'data-zcorvus-react-sprite';
const HIDDEN_SPRITE_STYLE = {
  position: 'absolute',
  width: 0,
  height: 0,
  overflow: 'hidden',
};
const scheduledSpriteIds = new Set();
const scheduledSpriteLoadIds = new Set();

function getSpriteBody(sprite) {
  const match = sprite.match(/<svg[^>]*>([\\s\\S]*?)<\\/svg>/);

  return match ? match[1].trim() : sprite;
}

export function getSpriteSymbolId(type, name, variant, defaultVariant = 'light') {
  return \`\${type}-\${variant === defaultVariant ? name : \`\${name}-\${variant}\`}\`;
}

export function injectZIconSprite(spriteId, sprite) {
  if (typeof document === 'undefined') {
    return undefined;
  }

  const existing = document.querySelector(\`[\${SPRITE_ATTR}="\${spriteId}"]\`);

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
  element.setAttribute(SPRITE_ATTR, spriteId);
  element.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
  document.body.prepend(element);

  return element;
}

function scheduleClientTask(task) {
  if (typeof queueMicrotask === 'function') {
    queueMicrotask(task);
    return;
  }

  Promise.resolve().then(task);
}

export function scheduleZIconSprite(spriteId, sprite) {
  if (typeof document === 'undefined' || scheduledSpriteIds.has(spriteId)) {
    return;
  }

  if (document.querySelector(\`[\${SPRITE_ATTR}="\${spriteId}"]\`)) {
    return;
  }

  scheduledSpriteIds.add(spriteId);
  scheduleClientTask(() => {
    injectZIconSprite(spriteId, sprite);
    scheduledSpriteIds.delete(spriteId);
  });
}

export function scheduleZIconSpriteLoad(loadId, loadSprite) {
  if (typeof document === 'undefined' || scheduledSpriteLoadIds.has(loadId)) {
    return;
  }

  scheduledSpriteLoadIds.add(loadId);
  scheduleClientTask(() => {
    loadSprite()
      .then(({ spriteId, sprite }) => {
        injectZIconSprite(spriteId, sprite);
      })
      .finally(() => {
        scheduledSpriteLoadIds.delete(loadId);
      });
  });
}

export function ZIconSprite({ spriteId, sprite, ...props }) {
  return React.createElement('svg', {
    ...props,
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': props['aria-hidden'] ?? true,
    [SPRITE_ATTR]: spriteId,
    style: { ...HIDDEN_SPRITE_STYLE, ...props.style },
    dangerouslySetInnerHTML: { __html: getSpriteBody(sprite) },
  });
}

export function createSpriteComponent(spriteId, sprite) {
  return function ZPackSprite(props) {
    return React.createElement(ZIconSprite, { spriteId, sprite, ...props });
  };
}

export function createPackIcon({ pack, variant, defaultVariant = 'light', spriteId, sprite, viewBoxes }) {
  return function ZPackIcon({ name, variant: _variant, size = 24, color, style, ...props }) {
    const viewBox = viewBoxes[name];

    if (!viewBox) {
      return null;
    }

    scheduleZIconSprite(spriteId, sprite);

    return React.createElement(
      'svg',
      {
        viewBox,
        width: size,
        height: size,
        ...props,
        style: { ...(color ? { color } : {}), ...style },
      },
      React.createElement('use', { href: \`#\${getSpriteSymbolId(pack, name, variant, defaultVariant)}\` })
    );
  };
}
`;
}

function createPackIconRuntimeTypes() {
  return `import React from 'react';

export interface PackIconProps<TName extends string> extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  name: TName;
  size?: string | number;
}

export interface ZIconSpriteProps extends Omit<React.SVGProps<SVGSVGElement>, 'children' | 'dangerouslySetInnerHTML'> {}

export declare function getSpriteSymbolId(
  type: string,
  name: string,
  variant: string,
  defaultVariant?: string
): string;

export declare function injectZIconSprite(spriteId: string, sprite: string): Element | undefined;
export declare function scheduleZIconSprite(spriteId: string, sprite: string): void;
export declare function scheduleZIconSpriteLoad(
  loadId: string,
  loadSprite: () => Promise<{ spriteId: string; sprite: string }>
): void;
export declare function ZIconSprite(props: ZIconSpriteProps & { spriteId: string; sprite: string }): React.ReactElement;
export declare function createSpriteComponent(spriteId: string, sprite: string): React.FC<ZIconSpriteProps>;

export declare function createPackIcon<TName extends string>(
  options: {
    pack: string;
    variant: string;
    defaultVariant?: string;
    spriteId: string;
    sprite: string;
    viewBoxes: Record<TName, string>;
  }
): React.FC<PackIconProps<TName>>;
`;
}

function createZIconRuntime() {
  return `import React from 'react';

const DEFAULT_OPTIONS = {
  defaultVariant: 'light',
  defaultVariants: undefined,
  fallbackVariant: undefined,
  fallbackPack: undefined,
  fallbackIcon: undefined,
  inputVariant: undefined,
  missing: 'null',
};

function isReactComponent(value) {
  return typeof value === 'function' || (typeof value === 'object' && value !== null && '$$typeof' in value);
}

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

function resolveIcon(registry, type, name, variant, fallbackVariant, fallbackPack) {
  const candidates = [
    [type, variant],
    fallbackVariant ? [type, fallbackVariant] : undefined,
    fallbackPack ? [fallbackPack, variant] : undefined,
    fallbackPack && fallbackVariant ? [fallbackPack, fallbackVariant] : undefined,
  ].filter(Boolean);

  for (const [pack, currentVariant] of candidates) {
    const Icon = registry[pack]?.[currentVariant]?.[name];

    if (isReactComponent(Icon)) {
      return Icon;
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

  return null;
}

export function createZIcon(registry, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const normalizedRegistry = normalizeRegistry(registry, config.inputVariant);

  return function CreatedZIcon({
    type,
    name,
    variant,
    size = 24,
    color,
    style,
    ...props
  }) {
    const resolvedVariant = variant ?? config.defaultVariants?.[type] ?? config.defaultVariant;
    const Icon = resolveIcon(
      normalizedRegistry,
      type,
      name,
      resolvedVariant,
      config.fallbackVariant,
      config.fallbackPack
    );

    if (Icon) {
      return React.createElement(Icon, { size, color, style, ...props });
    }

    if (config.fallbackIcon) {
      return React.createElement(config.fallbackIcon, { size, color, style, ...props });
    }

    return handleMissingIcon({ type, name, variant: resolvedVariant, missing: config.missing });
  };
}
`;
}

export function createZIconRuntimeTypes() {
  return `import React from 'react';
import type { IconPack, IconVariant } from '@zcorvus/icons/types';

export type IconComponent = React.FC<Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & {
  size?: string | number;
}>;

export type IconVariantMap = Record<string, IconComponent>;
export type IconPackMap = Record<string, IconVariantMap>;
export type IconRegistry = Record<string, IconPackMap>;
export type FlatIconRegistry = Record<string, IconVariantMap>;
export type MissingIconBehavior = 'null' | 'warn' | 'error';

type IconSvgProps = Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & {
  size?: string | number;
};
type RegistryPackName<TRegistry> = Extract<keyof TRegistry, string>;
type RegistryVariantName<
  TRegistry extends IconRegistry,
  TPack extends RegistryPackName<TRegistry>,
> = Extract<keyof TRegistry[TPack], string>;
type RegistryIconName<
  TRegistry extends IconRegistry,
  TPack extends RegistryPackName<TRegistry>,
  TVariant extends RegistryVariantName<TRegistry, TPack>,
> = Extract<keyof TRegistry[TPack][TVariant], string>;
type RegistryPackIconName<
  TRegistry extends IconRegistry,
  TPack extends RegistryPackName<TRegistry>,
> = {
  [TVariant in RegistryVariantName<TRegistry, TPack>]: RegistryIconName<TRegistry, TPack, TVariant>;
}[RegistryVariantName<TRegistry, TPack>];
type FlatPackName<TRegistry> = Extract<keyof TRegistry, string>;

export interface CreateZIconOptions {
  defaultVariant?: IconVariant | string;
  defaultVariants?: Record<string, IconVariant | string>;
  fallbackVariant?: IconVariant | string;
  fallbackPack?: IconPack | string;
  fallbackIcon?: IconComponent;
  inputVariant?: IconVariant | string;
  missing?: MissingIconBehavior;
}

export type CreatedZIconProps<TRegistry extends IconRegistry> = {
  [TPack in RegistryPackName<TRegistry>]:
    | (IconSvgProps & {
        type: TPack;
        variant?: undefined;
        name: RegistryPackIconName<TRegistry, TPack>;
      })
    | {
        [TVariant in RegistryVariantName<TRegistry, TPack>]: IconSvgProps & {
          type: TPack;
          variant: TVariant;
          name: RegistryIconName<TRegistry, TPack, TVariant>;
        };
      }[RegistryVariantName<TRegistry, TPack>];
}[RegistryPackName<TRegistry>];

export type CreatedFlatZIconProps<TRegistry extends FlatIconRegistry> = {
  [TPack in FlatPackName<TRegistry>]: IconSvgProps & {
    type: TPack;
    name: Extract<keyof TRegistry[TPack], string>;
    variant?: IconVariant | string;
  };
}[FlatPackName<TRegistry>];

export declare function createZIcon<const TRegistry extends IconRegistry>(
  registry: TRegistry,
  options?: CreateZIconOptions
): React.FC<CreatedZIconProps<TRegistry>>;

export declare function createZIcon<const TRegistry extends FlatIconRegistry>(
  registry: TRegistry,
  options: CreateZIconOptions & { inputVariant: IconVariant | string }
): React.FC<CreatedFlatZIconProps<TRegistry>>;
`;
}

function createReactTypeExports() {
  return `export type * from '@zcorvus/icons/types';\n`;
}

export function createZIconTypes(packData) {
  const imports = [];
  const selections = [];

  for (const pack of CONFIG.packs) {
    for (const [variant] of Object.entries(packData[pack] ?? {})) {
      const iconNameType = getVariantIconNameType(pack, variant);
      const variantProperty = variant === getDefaultVariant(pack)
        ? `variant?: '${variant}'`
        : `variant: '${variant}'`;

      imports.push(iconNameType);
      selections.push(`  | { type: '${pack}'; ${variantProperty}; name: ${iconNameType} }`);
    }
  }

  return `import React from 'react';\nimport type { ${imports.join(', ')} } from '@zcorvus/icons/types';\n\ntype ZIconSelection =\n${selections.join('\n')};\n\n/** @deprecated Prefer pack-specific wrappers such as ZMina, ZLan, ZCore, ZNeo or ZBru. */\nexport type ZIconProps = Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & ZIconSelection & {\n  size?: string | number;\n};\n\n/** @deprecated Prefer pack-specific wrappers such as ZMina, ZLan, ZCore, ZNeo or ZBru. */\nexport declare function ZIcon(props: ZIconProps): React.ReactElement | null;\n`;
}

export function buildReactPackage(icons, packData) {
  const distDir = path.join(CONFIG.packagesDir, 'icons-react', 'dist');
  const { writeFile, finish } = createOutputWriter(distDir);

  const rootExports = [`export { ZIcon } from './z-icon.js';`];
  const rootTypes = [
    `export { ZIcon } from './z-icon.js';`,
    `export type { ZIconProps } from './z-icon.js';`,
    `export type * from './types/index.js';`,
  ];
  const zIconViewBoxImports = [];
  const zIconSpriteLoaders = [];
  const zIconViewBoxMaps = [];
  const packIndexExports = [];
  const packIndexTypes = [];
  const packsDataExports = [];
  const packsDataTypes = [];

  for (const icon of icons) {
    writeFile(
      path.join(distDir, `${icon.publicFileName}.js`),
      createReactComponent(icon.svg, icon.componentName, icon.pack, icon.variant, icon.sourceFile)
    );
    writeFile(path.join(distDir, `${icon.publicFileName}.d.ts`), createReactComponentTypes(icon.componentName));

    rootExports.push(`export { ${icon.componentName} } from './${icon.publicFileName}.js';`);
    rootTypes.push(`export { ${icon.componentName} } from './${icon.publicFileName}.js';`);
    rootTypes.push(`export type { ${icon.componentName}Props } from './${icon.publicFileName}.js';`);
  }

  writeFile(path.join(distDir, 'packs', 'create-pack-icon.js'), createPackIconRuntime());
  writeFile(path.join(distDir, 'packs', 'create-pack-icon.d.ts'), createPackIconRuntimeTypes());

  for (const pack of CONFIG.packs) {
    const variants = packData[pack] ?? {};

    for (const [variant, variantIcons] of Object.entries(variants)) {
      const suffix = getPublicVariantSuffix(pack, variant);
      const wrapperName = `Z${capitalize(pack)}${suffix}`;
      const spriteWrapperName = `${wrapperName}Sprite`;
      const viewBoxesName = `${pack}${toPascalCase(variant)}ViewBoxes`;
      const fileName = `${pack}${getVariantFileSuffix(pack, variant)}`;
      const spriteName = `${pack}Sprite${suffix}`;
      const spriteId = fileName;
      const viewBoxEntries = variantIcons
        .map((icon) => `  '${icon.name}': '${parseSvg(icon.svg, icon.sourceFile).viewBox}'`)
        .join(',\n');

      writeFile(
        path.join(distDir, 'viewboxes', `${fileName}.js`),
        `export const ${viewBoxesName} = {\n${viewBoxEntries}\n};\n`
      );
      writeFile(
        path.join(distDir, 'viewboxes', `${fileName}.d.ts`),
        `export declare const ${viewBoxesName}: Record<string, string>;\n`
      );

      writeFile(
        path.join(distDir, 'packs', `${fileName}.js`),
        `import { ${spriteName} } from '@zcorvus/icons/sprites/${fileName}.js';\nimport { ${viewBoxesName} } from '../viewboxes/${fileName}.js';\nimport { createPackIcon, createSpriteComponent } from './create-pack-icon.js';\n\nexport { ${viewBoxesName} } from '../viewboxes/${fileName}.js';\nexport const ${spriteWrapperName} = createSpriteComponent('${spriteId}', ${spriteName});\nexport const ${wrapperName} = createPackIcon({ pack: '${pack}', variant: '${variant}', defaultVariant: '${getDefaultVariant(pack)}', spriteId: '${spriteId}', sprite: ${spriteName}, viewBoxes: ${viewBoxesName} });\nexport default ${wrapperName};\n`
      );
      writeFile(
        path.join(distDir, 'packs', `${fileName}.d.ts`),
        `import React from 'react';\nimport type { ${getVariantIconNameType(pack, variant)} } from '@zcorvus/icons/types';\nimport type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';\n\nexport declare const ${viewBoxesName}: Record<${getVariantIconNameType(pack, variant)}, string>;\nexport declare const ${spriteWrapperName}: React.FC<ZIconSpriteProps>;\nexport type ${wrapperName}Props = PackIconProps<${getVariantIconNameType(pack, variant)}>;\nexport declare const ${wrapperName}: React.FC<${wrapperName}Props>;\nexport default ${wrapperName};\n`
      );

      packIndexExports.push(`export { ${wrapperName}, ${spriteWrapperName} } from './${fileName}.js';`);
      packIndexTypes.push(`export { ${wrapperName}, ${spriteWrapperName} } from './${fileName}.js';`);
      packIndexTypes.push(`export type { ${wrapperName}Props } from './${fileName}.js';`);
      zIconViewBoxImports.push(`import { ${viewBoxesName} } from './viewboxes/${fileName}.js';`);
      zIconSpriteLoaders.push(`    '${variant}': () => import('@zcorvus/icons/sprites/${fileName}.js').then((module) => ({ spriteId: '${spriteId}', sprite: module.${spriteName} }))`);
      zIconViewBoxMaps.push({ pack, variant, viewBoxesName });
    }
  }

  for (const pack of CONFIG.packs) {
    const variants = packData[pack] ?? {};

    for (const [variant, variantIcons] of Object.entries(variants)) {
      const suffix = getPublicVariantSuffix(pack, variant);
      const dataName = `${pack}Icons${suffix}`;
      const fileName = `${pack}${getVariantFileSuffix(pack, variant)}`;
      const imports = variantIcons.map((icon) => `import { ${icon.componentName} } from '../${icon.publicFileName}.js';`);
      const iconMap = `export const ${dataName} = {\n${variantIcons.map((icon) => `  '${icon.name}': ${icon.componentName}`).join(',\n')}\n};`;

      writeFile(path.join(distDir, 'packs-data', `${fileName}.js`), `${imports.join('\n')}\n\n${iconMap};\n`);
      writeFile(
        path.join(distDir, 'packs-data', `${fileName}.d.ts`),
        `import type { IconComponent } from '../create.js';\n\nexport declare const ${dataName}: {\n${variantIcons.map((icon) => `  readonly '${icon.name}': IconComponent;`).join('\n')}\n};\n`
      );

      packsDataExports.push(`export { ${dataName} } from './${fileName}.js';`);
      packsDataTypes.push(`export { ${dataName} } from './${fileName}.js';`);
    }
  }

  writeFile(path.join(distDir, 'packs', 'index.js'), `${packIndexExports.join('\n')}\n`);
  writeFile(path.join(distDir, 'packs', 'index.d.ts'), `${packIndexTypes.join('\n')}\n`);
  writeFile(path.join(distDir, 'packs-data', 'index.js'), `${packsDataExports.join('\n')}\n`);
  writeFile(path.join(distDir, 'packs-data', 'index.d.ts'), `${packsDataTypes.join('\n')}\n`);
  writeFile(path.join(distDir, 'types', 'index.js'), 'export {};\n');
  writeFile(path.join(distDir, 'types', 'index.d.ts'), createReactTypeExports());
  writeFile(path.join(distDir, 'create.js'), createZIconRuntime());
  writeFile(path.join(distDir, 'create.d.ts'), createZIconRuntimeTypes());

  const zIconViewBoxes = CONFIG.packs.map((pack) => {
    const entries = zIconViewBoxMaps
      .filter((map) => map.pack === pack)
      .map((map) => `    '${map.variant}': ${map.viewBoxesName}`)
      .join(',\n');

    return `  ${pack}: {\n${entries}\n  }`;
  }).join(',\n');
  const zIconDefaultVariants = CONFIG.packs.map((pack) => `  ${pack}: '${getDefaultVariant(pack)}'`).join(',\n');
  const zIconLoaderMap = CONFIG.packs.map((pack) => {
    const entries = zIconSpriteLoaders
      .filter((loader) => loader.includes(`import('@zcorvus/icons/sprites/${pack}`))
      .join(',\n');

    return `  ${pack}: {\n${entries}\n  }`;
  }).join(',\n');

  writeFile(
    path.join(distDir, 'z-icon.js'),
    `import React from 'react';\nimport { getSpriteSymbolId, scheduleZIconSpriteLoad } from './packs/create-pack-icon.js';\n${zIconViewBoxImports.join('\n')}\n\nconst viewBoxes = {\n${zIconViewBoxes}\n};\n\nconst spriteLoaders = {\n${zIconLoaderMap}\n};\n\nconst defaultVariants = {\n${zIconDefaultVariants}\n};\n\nexport function ZIcon({ type, name, variant, size = 24, color, style, ...props }) {\n  const resolvedVariant = variant ?? defaultVariants[type] ?? 'light';\n  const viewBox = viewBoxes[type]?.[resolvedVariant]?.[name];\n  const loader = spriteLoaders[type]?.[resolvedVariant];\n\n  if (!viewBox || !loader) {\n    return null;\n  }\n\n  scheduleZIconSpriteLoad(\`\${type}:\${resolvedVariant}\`, loader);\n\n  return React.createElement(\n    'svg',\n    {\n      viewBox,\n      width: size,\n      height: size,\n      ...props,\n      style: { ...(color ? { color } : {}), ...style },\n    },\n    React.createElement('use', { href: \`#\${getSpriteSymbolId(type, name, resolvedVariant, defaultVariants[type])}\` })\n  );\n}\n`
  );
  writeFile(
    path.join(distDir, 'z-icon.d.ts'),
    createZIconTypes(packData)
  );

  writeFile(path.join(distDir, 'index.js'), `${rootExports.join('\n')}\n`);
  writeFile(path.join(distDir, 'index.d.ts'), `${rootTypes.join('\n')}\n`);
  return finish();
}
