import path from 'path';
import {
  getDefaultVariant,
  getPublicVariantSuffix,
  getVariantFileSuffix,
  iconConfig as CONFIG,
  isFillIcon,
} from '../icon-config.js';
import { finishOutputTracking, startOutputTracking, writeFile } from './fs-utils.js';
import { capitalize } from './naming.js';
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

export function createPackIcon(iconMap, defaultVariant = 'light') {
  return function ZPackIcon({ name, variant = defaultVariant, size = 24, color, style, ...props }) {
    const Icon = iconMap[variant]?.[name];

    if (!Icon) {
      return null;
    }

    return React.createElement(Icon, { size, color, style, ...props });
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

export declare function createPackIcon<TName extends string>(
  iconMap: Record<string, Record<string, React.FC<Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & { size?: string | number }>>>,
  defaultVariant?: IconVariant
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
  const allPackImports = [];
  const zIconMaps = [];
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
      const mapName = `${pack}${capitalize(variant)}IconMap`;
      const fileName = `${pack}${getVariantFileSuffix(pack, variant)}`;
      const imports = variantIcons.map((icon) => `import { ${icon.componentName} } from '../${icon.publicFileName}.js';`);
      const iconMap = `export const ${mapName} = {\n  ${variant}: {\n${variantIcons.map((icon) => `    '${icon.name}': ${icon.componentName}`).join(',\n')}\n  }\n};`;

      writeFile(
        path.join(distDir, 'packs', `${fileName}.js`),
        `import { createPackIcon } from './create-pack-icon.js';\n${imports.join('\n')}\n\n${iconMap}\n\nexport const ${wrapperName} = createPackIcon(${mapName}, '${variant}');\nexport default ${wrapperName};\n`
      );
      writeFile(
        path.join(distDir, 'packs', `${fileName}.d.ts`),
        `import React from 'react';\nimport type { ${capitalize(pack)}IconName } from '@zcorvus/icons/types';\nimport type { PackIconProps } from './create-pack-icon.js';\n\nexport declare const ${mapName}: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;\nexport type ${wrapperName}Props = PackIconProps<${capitalize(pack)}IconName>;\nexport declare const ${wrapperName}: React.FC<${wrapperName}Props>;\nexport default ${wrapperName};\n`
      );

      packIndexExports.push(`export { ${wrapperName} } from './${fileName}.js';`);
      packIndexTypes.push(`export { ${wrapperName} } from './${fileName}.js';`);
      packIndexTypes.push(`export type { ${wrapperName}Props } from './${fileName}.js';`);
      allPackImports.push(`import { ${mapName} } from './packs/${fileName}.js';`);
      zIconMaps.push({ pack, variant, mapName });
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

  const zIconCollection = CONFIG.packs.map((pack) => {
    const entries = zIconMaps
      .filter((map) => map.pack === pack)
      .map((map) => `    ${map.variant}: ${map.mapName}.${map.variant}`)
      .join(',\n');

    return `  ${pack}: {\n${entries}\n  }`;
  }).join(',\n');
  const zIconDefaultVariants = CONFIG.packs.map((pack) => `  ${pack}: '${getDefaultVariant(pack)}'`).join(',\n');

  writeFile(
    path.join(distDir, 'z-icon.js'),
    `import React from 'react';\n${allPackImports.join('\n')}\n\nconst iconCollections = {\n${zIconCollection}\n};\n\nconst defaultVariants = {\n${zIconDefaultVariants}\n};\n\nexport function ZIcon({ type, name, variant, size = 24, color, style, ...props }) {\n  const resolvedVariant = variant ?? defaultVariants[type] ?? 'light';\n  const Icon = iconCollections[type]?.[resolvedVariant]?.[name];\n\n  if (!Icon) {\n    return null;\n  }\n\n  return React.createElement(Icon, { size, color, style, ...props });\n}\n`
  );
  writeFile(
    path.join(distDir, 'z-icon.d.ts'),
    `import React from 'react';\nimport type { AllIconNames, IconPack, IconVariant } from '@zcorvus/icons/types';\n\nexport interface ZIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {\n  type: IconPack;\n  name: AllIconNames;\n  variant?: IconVariant;\n  size?: string | number;\n}\n\nexport declare function ZIcon(props: ZIconProps): React.ReactElement | null;\n`
  );

  writeFile(path.join(distDir, 'index.js'), `${rootExports.join('\n')}\n`);
  writeFile(path.join(distDir, 'index.d.ts'), `${rootTypes.join('\n')}\n`);
  finishOutputTracking();
}
