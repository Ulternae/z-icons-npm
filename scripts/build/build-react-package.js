import path from 'path';
import {
  getDefaultVariant,
  getPublicVariantSuffix,
  getVariantFileSuffix,
  iconConfig as CONFIG,
  isFillIcon,
} from '../icon-config.js';
import { finishOutputTracking, startOutputTracking, writeFile } from './fs-utils.js';
import { capitalize, toPascalCase } from './naming.js';
import { parseSvg } from './svg-utils.js';

function createReactComponent(svgContent, componentName, pack, variant) {
  const { viewBox, children } = parseSvg(svgContent);
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

export function useZIconSprite(spriteId, sprite) {
  React.useEffect(() => {
    injectZIconSprite(spriteId, sprite);
  }, [spriteId, sprite]);
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
    useZIconSprite(spriteId, sprite);

    const viewBox = viewBoxes[name];

    if (!viewBox) {
      return null;
    }

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
import type { IconVariant } from '@zcorvus/icons/types';

export interface PackIconProps<TName extends string> extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  name: TName;
  variant?: IconVariant;
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
export declare function useZIconSprite(spriteId: string, sprite: string): void;
export declare function ZIconSprite(props: ZIconSpriteProps & { spriteId: string; sprite: string }): React.ReactElement;
export declare function createSpriteComponent(spriteId: string, sprite: string): React.FC<ZIconSpriteProps>;

export declare function createPackIcon<TName extends string>(
  options: {
    pack: string;
    variant: IconVariant | string;
    defaultVariant?: IconVariant | string;
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

function createZIconRuntimeTypes() {
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

type RegistryPackName<TRegistry> = Extract<keyof TRegistry, string>;
type RegistryVariantName<TRegistry> = TRegistry extends Record<string, infer TPack>
  ? Extract<keyof TPack, string>
  : string;
type RegistryIconName<TRegistry> = TRegistry extends Record<string, infer TPack>
  ? TPack extends Record<string, infer TVariant>
    ? Extract<keyof TVariant, string>
    : string
  : string;
type FlatPackName<TRegistry> = Extract<keyof TRegistry, string>;
type FlatIconName<TRegistry> = TRegistry extends Record<string, infer TPack>
  ? Extract<keyof TPack, string>
  : string;

export interface CreateZIconOptions {
  defaultVariant?: IconVariant | string;
  defaultVariants?: Record<string, IconVariant | string>;
  fallbackVariant?: IconVariant | string;
  fallbackPack?: IconPack | string;
  fallbackIcon?: IconComponent;
  inputVariant?: IconVariant | string;
  missing?: MissingIconBehavior;
}

export type CreatedZIconProps<TRegistry> = Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & {
  type: RegistryPackName<TRegistry>;
  name: RegistryIconName<TRegistry>;
  variant?: RegistryVariantName<TRegistry> | IconVariant | string;
  size?: string | number;
};

export type CreatedFlatZIconProps<TRegistry> = Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & {
  type: FlatPackName<TRegistry>;
  name: FlatIconName<TRegistry>;
  variant?: IconVariant | string;
  size?: string | number;
};

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

export function buildReactPackage(icons, packData) {
  const distDir = path.join(CONFIG.packagesDir, 'icons-react', 'dist');
  startOutputTracking(distDir);

  const rootExports = [`export { ZIcon } from './z-icon.js';`];
  const rootTypes = [`export { ZIcon } from './z-icon.js';`, `export type { ZIconProps } from './z-icon.js';`];
  const zIconViewBoxImports = [];
  const zIconSpriteLoaders = [];
  const zIconViewBoxMaps = [];
  const packIndexExports = [];
  const packIndexTypes = [];
  const packsDataExports = [];
  const packsDataTypes = [];

  for (const icon of icons) {
    writeFile(path.join(distDir, `${icon.publicFileName}.js`), createReactComponent(icon.svg, icon.componentName, icon.pack, icon.variant));
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
      const viewBoxEntries = variantIcons.map((icon) => `  '${icon.name}': '${parseSvg(icon.svg).viewBox}'`).join(',\n');

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
        `import React from 'react';\nimport type { ${capitalize(pack)}IconName } from '@zcorvus/icons/types';\nimport type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';\n\nexport declare const ${viewBoxesName}: Record<${capitalize(pack)}IconName, string>;\nexport declare const ${spriteWrapperName}: React.FC<ZIconSpriteProps>;\nexport type ${wrapperName}Props = PackIconProps<${capitalize(pack)}IconName>;\nexport declare const ${wrapperName}: React.FC<${wrapperName}Props>;\nexport default ${wrapperName};\n`
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
    `import React from 'react';\nimport { getSpriteSymbolId, injectZIconSprite } from './packs/create-pack-icon.js';\n${zIconViewBoxImports.join('\n')}\n\nconst viewBoxes = {\n${zIconViewBoxes}\n};\n\nconst spriteLoaders = {\n${zIconLoaderMap}\n};\n\nconst defaultVariants = {\n${zIconDefaultVariants}\n};\n\nfunction useSpriteLoader(loader) {\n  React.useEffect(() => {\n    if (!loader) {\n      return undefined;\n    }\n\n    let active = true;\n\n    loader().then(({ spriteId, sprite }) => {\n      if (active) {\n        injectZIconSprite(spriteId, sprite);\n      }\n    });\n\n    return () => {\n      active = false;\n    };\n  }, [loader]);\n}\n\nexport function ZIcon({ type, name, variant, size = 24, color, style, ...props }) {\n  const resolvedVariant = variant ?? defaultVariants[type] ?? 'light';\n  const viewBox = viewBoxes[type]?.[resolvedVariant]?.[name];\n  const loader = spriteLoaders[type]?.[resolvedVariant];\n\n  useSpriteLoader(loader);\n\n  if (!viewBox) {\n    return null;\n  }\n\n  return React.createElement(\n    'svg',\n    {\n      viewBox,\n      width: size,\n      height: size,\n      ...props,\n      style: { ...(color ? { color } : {}), ...style },\n    },\n    React.createElement('use', { href: \`#\${getSpriteSymbolId(type, name, resolvedVariant, defaultVariants[type])}\` })\n  );\n}\n`
  );
  writeFile(
    path.join(distDir, 'z-icon.d.ts'),
    `import React from 'react';\nimport type { AllIconNames, IconPack, IconVariant } from '@zcorvus/icons/types';\n\nexport interface ZIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {\n  type: IconPack;\n  name: AllIconNames;\n  variant?: IconVariant;\n  size?: string | number;\n}\n\nexport declare function ZIcon(props: ZIconProps): React.ReactElement | null;\n`
  );

  writeFile(path.join(distDir, 'index.js'), `${rootExports.join('\n')}\n`);
  writeFile(path.join(distDir, 'index.d.ts'), `${rootTypes.join('\n')}\n`);
  finishOutputTracking();
}
