import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';
import { svgoConfig } from './svgo.config.js';

const CONFIG = {
  sourceDir: 'icons',
  packagesDir: 'packages',
  packs: ['core', 'neo', 'mina'],
  variants: ['light', 'solid', 'regular', 'thin'],
  publicVariantSuffixes: {
    light: '',
    solid: 'Solid',
    regular: 'Regular',
    thin: 'Thin',
  },
  svgoConfig,
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function cleanDir(dir) {
  const resolvedDir = path.resolve(dir);
  const resolvedCwd = process.cwd();

  if (resolvedDir === resolvedCwd || !resolvedDir.startsWith(resolvedCwd)) {
    throw new Error(`Refusing to clean unsafe path: ${resolvedDir}`);
  }

  fs.rmSync(resolvedDir, { recursive: true, force: true });
  ensureDir(resolvedDir);
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function toPascalCase(value) {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function toKebabCase(value) {
  return value
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

function getPublicVariantSuffix(variant) {
  return CONFIG.publicVariantSuffixes[variant] ?? capitalize(variant);
}

function getPublicIconName(pack, iconName, variant) {
  return `${capitalize(pack)}${toPascalCase(iconName)}${getPublicVariantSuffix(variant)}`;
}

function getPublicFileName(pack, iconName, variant) {
  return toKebabCase(getPublicIconName(pack, iconName, variant));
}

function escapeJsString(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function parseSvg(svgContent) {
  const viewBoxMatch = svgContent.match(/viewBox=["']([^"']+)["']/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  const innerMatch = svgContent.match(/<svg[^>]*>(.*?)<\/svg>/s);
  const innerContent = innerMatch ? innerMatch[1].trim() : '';
  const elements = [];
  const elementRegex = /<(\w+)([^>]*)\/>/g;
  let match;

  while ((match = elementRegex.exec(innerContent)) !== null) {
    const tagName = match[1];
    const attrs = match[2].trim();
    const attrsObj = {};
    const attrRegex = /(\w+(?:-\w+)*)=["']([^"']*)["']/g;
    let attrMatch;

    while ((attrMatch = attrRegex.exec(attrs)) !== null) {
      let key = attrMatch[1];
      const value = attrMatch[2];

      if (key.includes('-')) {
        key = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
      }

      attrsObj[key] = value;
    }

    elements.push(`React.createElement('${tagName}', ${JSON.stringify(attrsObj)})`);
  }

  return { viewBox, children: elements };
}

function createReactComponent(svgContent, componentName, variant) {
  const { viewBox, children } = parseSvg(svgContent);
  const childrenCode = children.length > 0 ? `, ${children.join(', ')}` : '';
  const variantProps = variant === 'solid'
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

function getIconFiles() {
  const icons = [];
  const packData = {};

  for (const pack of CONFIG.packs) {
    packData[pack] = {};

    for (const variant of CONFIG.variants) {
      const variantDir = path.join(CONFIG.sourceDir, pack, variant);
      if (!fs.existsSync(variantDir)) continue;

      const files = fs
        .readdirSync(variantDir)
        .filter((file) => file.endsWith('.svg'))
        .sort((a, b) => a.localeCompare(b));

      if (files.length === 0) continue;

      packData[pack][variant] = [];

      for (const file of files) {
        const filePath = path.join(variantDir, file);
        const source = fs.readFileSync(filePath, 'utf8');
        const result = optimize(source, {
          path: filePath,
          ...CONFIG.svgoConfig,
        });

        if (result.error) {
          throw new Error(`Error optimizing ${filePath}: ${result.error}`);
        }

        fs.writeFileSync(filePath, result.data, 'utf8');

        const name = path.basename(file, '.svg').toLowerCase().replace(/[_\s]+/g, '-');
        const componentName = getPublicIconName(pack, name, variant);
        const publicFileName = getPublicFileName(pack, name, variant);
        const icon = {
          pack,
          variant,
          name,
          componentName,
          publicFileName,
          svg: result.data,
        };

        icons.push(icon);
        packData[pack][variant].push(icon);
      }
    }
  }

  return { icons, packData };
}

function createTypeUnion(typeName, values) {
  if (values.length === 0) {
    return `export type ${typeName} = never;`;
  }

  return `export type ${typeName} =\n${values.map((value) => `  | '${value}'`).join('\n')};`;
}

function buildCorePackage(icons, packData) {
  const distDir = path.join(CONFIG.packagesDir, 'icons', 'dist');
  cleanDir(distDir);

  const svgExports = [];
  const svgTypes = [];
  const packDictionaryExports = [];
  const packDictionaryTypes = [];
  const nameExports = [];
  const nameTypes = [];
  const typeUnions = [];
  const packNames = {};
  const availableVariants = new Set();

  for (const icon of icons) {
    writeFile(
      path.join(distDir, 'svg', `${icon.publicFileName}.js`),
      `export const ${icon.componentName} = '${escapeJsString(icon.svg)}';\nexport default ${icon.componentName};\n`
    );
    writeFile(
      path.join(distDir, 'svg', `${icon.publicFileName}.d.ts`),
      `export declare const ${icon.componentName}: string;\nexport default ${icon.componentName};\n`
    );

    svgExports.push(`export { ${icon.componentName}, default as ${icon.componentName}Svg } from './${icon.publicFileName}.js';`);
    svgTypes.push(`export { ${icon.componentName}, default as ${icon.componentName}Svg } from './${icon.publicFileName}.js';`);
    availableVariants.add(icon.variant);

    if (!packNames[icon.pack]) {
      packNames[icon.pack] = new Set();
    }
    packNames[icon.pack].add(icon.name);
  }

  for (const pack of CONFIG.packs) {
    const variants = packData[pack] ?? {};
    const packImports = [];
    const variantObjects = [];

    for (const [variant, variantIcons] of Object.entries(variants)) {
      packImports.push(...variantIcons.map((icon) => `import { ${icon.componentName} } from './${icon.publicFileName}.js';`));
      variantObjects.push(`  ${variant}: {\n${variantIcons.map((icon) => `    '${icon.name}': ${icon.componentName}`).join(',\n')}\n  }`);
    }

    const packConst = `${pack}Icons`;
    writeFile(
      path.join(distDir, 'svg', `${pack}.js`),
      `${packImports.join('\n')}\n\nexport const ${packConst} = {\n${variantObjects.join(',\n')}\n};\n`
    );
    writeFile(
      path.join(distDir, 'svg', `${pack}.d.ts`),
      `export declare const ${packConst}: Record<string, Record<string, string>>;\n`
    );

    packDictionaryExports.push(`export { ${packConst} } from './${pack}.js';`);
    packDictionaryTypes.push(`export { ${packConst} } from './${pack}.js';`);

    const iconNames = Array.from(packNames[pack] ?? []).sort((a, b) => a.localeCompare(b));
    const namesConst = `${pack}IconNames`;
    writeFile(
      path.join(distDir, 'names', `${pack}.js`),
      `export const ${namesConst} = [\n${iconNames.map((name) => `  '${name}'`).join(',\n')}\n];\n`
    );
    writeFile(
      path.join(distDir, 'names', `${pack}.d.ts`),
      `import type { ${capitalize(pack)}IconName } from '../types/index.js';\n\nexport declare const ${namesConst}: readonly ${capitalize(pack)}IconName[];\n`
    );

    nameExports.push(`export { ${namesConst} } from './${pack}.js';`);
    nameTypes.push(`export { ${namesConst} } from './${pack}.js';`);
    typeUnions.push(createTypeUnion(`${capitalize(pack)}IconName`, iconNames));
  }

  writeFile(
    path.join(distDir, 'svg', 'index.js'),
    `${svgExports.join('\n')}\n${packDictionaryExports.join('\n')}\n`
  );
  writeFile(
    path.join(distDir, 'svg', 'index.d.ts'),
    `${svgTypes.join('\n')}\n${packDictionaryTypes.join('\n')}\n`
  );

  writeFile(
    path.join(distDir, 'names', 'index.js'),
    `${nameExports.join('\n')}\n`
  );
  writeFile(
    path.join(distDir, 'names', 'index.d.ts'),
    `${nameTypes.join('\n')}\n`
  );

  const variantUnion = createTypeUnion('IconVariant', CONFIG.variants);
  const typeContent = `${typeUnions.join('\n\n')}\n\nexport type AllIconNames = ${CONFIG.packs.map((pack) => `${capitalize(pack)}IconName`).join(' | ')};\nexport type IconPack = ${CONFIG.packs.map((pack) => `'${pack}'`).join(' | ')};\n${variantUnion}\n`;

  writeFile(path.join(distDir, 'types', 'index.js'), 'export {};\n');
  writeFile(path.join(distDir, 'types', 'index.d.ts'), typeContent);

  const rootImports = CONFIG.packs.map((pack) => `import { ${pack}Icons } from './svg/${pack}.js';`).join('\n');
  const rootExports = CONFIG.packs.map((pack) => `export { ${pack}Icons } from './svg/${pack}.js';`).join('\n');
  const rootNames = CONFIG.packs.map((pack) => `export { ${pack}IconNames } from './names/${pack}.js';`).join('\n');
  const rootIconMap = CONFIG.packs.map((pack) => `  ${pack}: ${pack}Icons`).join(',\n');

  writeFile(
    path.join(distDir, 'index.js'),
    `${rootImports}\n\nconst iconCollections = {\n${rootIconMap}\n};\n\nexport function getIconSvg(pack, name, variant = 'light') {\n  return iconCollections[pack]?.[variant]?.[name];\n}\n\n${rootExports}\n${rootNames}\n`
  );
  writeFile(
    path.join(distDir, 'index.d.ts'),
    `import type { AllIconNames, IconPack, IconVariant } from './types/index.js';\nexport type { AllIconNames, CoreIconName, IconPack, IconVariant, MinaIconName, NeoIconName } from './types/index.js';\nexport { coreIconNames, minaIconNames, neoIconNames } from './names/index.js';\nexport { coreIcons, minaIcons, neoIcons } from './svg/index.js';\nexport declare function getIconSvg(pack: IconPack, name: AllIconNames, variant?: IconVariant): string | undefined;\n`
  );
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
    variant = config.defaultVariant,
    size = 24,
    color,
    style,
    ...props
  }) {
    const Icon = resolveIcon(
      normalizedRegistry,
      type,
      name,
      variant,
      config.fallbackVariant,
      config.fallbackPack
    );

    if (Icon) {
      return React.createElement(Icon, { size, color, style, ...props });
    }

    if (config.fallbackIcon) {
      return React.createElement(config.fallbackIcon, { size, color, style, ...props });
    }

    return handleMissingIcon({ type, name, variant, missing: config.missing });
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

function buildReactPackage(icons, packData) {
  const distDir = path.join(CONFIG.packagesDir, 'icons-react', 'dist');
  cleanDir(distDir);

  const rootExports = [`export { ZIcon } from './z-icon.js';`];
  const rootTypes = [`export { ZIcon } from './z-icon.js';`, `export type { ZIconProps } from './z-icon.js';`];
  const allPackImports = [];
  const zIconMaps = [];
  const packIndexExports = [];
  const packIndexTypes = [];
  const packsDataExports = [];
  const packsDataTypes = [];

  for (const icon of icons) {
    writeFile(
      path.join(distDir, `${icon.publicFileName}.js`),
      createReactComponent(icon.svg, icon.componentName, icon.variant)
    );
    writeFile(
      path.join(distDir, `${icon.publicFileName}.d.ts`),
      createReactComponentTypes(icon.componentName)
    );

    rootExports.push(`export { ${icon.componentName} } from './${icon.publicFileName}.js';`);
    rootTypes.push(`export { ${icon.componentName} } from './${icon.publicFileName}.js';`);
    rootTypes.push(`export type { ${icon.componentName}Props } from './${icon.publicFileName}.js';`);
  }

  writeFile(path.join(distDir, 'packs', 'create-pack-icon.js'), createPackIconRuntime());
  writeFile(path.join(distDir, 'packs', 'create-pack-icon.d.ts'), createPackIconRuntimeTypes());

  for (const pack of CONFIG.packs) {
    const variants = packData[pack] ?? {};

    for (const [variant, variantIcons] of Object.entries(variants)) {
      const wrapperName = `Z${capitalize(pack)}${getPublicVariantSuffix(variant)}`;
      const mapName = `${pack}${getPublicVariantSuffix(variant) || 'Light'}IconMap`;
      const fileName = `${pack}${variant === 'light' ? '' : `-${variant}`}`;
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
      const suffix = getPublicVariantSuffix(variant);
      const dataName = `${pack}Icons${suffix}`;
      const fileName = `${pack}${variant === 'light' ? '' : `-${variant}`}`;
      const imports = variantIcons.map((icon) => `import { ${icon.componentName} } from '../${icon.publicFileName}.js';`);
      const iconMap = `export const ${dataName} = {\n${variantIcons.map((icon) => `  '${icon.name}': ${icon.componentName}`).join(',\n')}\n};`;

      writeFile(
        path.join(distDir, 'packs-data', `${fileName}.js`),
        `${imports.join('\n')}\n\n${iconMap};\n`
      );
      writeFile(
        path.join(distDir, 'packs-data', `${fileName}.d.ts`),
        `import type { IconComponent } from '../create.js';\n\nexport declare const ${dataName}: {\n${variantIcons.map((icon) => `  readonly '${icon.name}': IconComponent;`).join('\n')}\n};\n`
      );

      packsDataExports.push(`export { ${dataName} } from './${fileName}.js';`);
      packsDataTypes.push(`export { ${dataName} } from './${fileName}.js';`);
    }
  }

  writeFile(
    path.join(distDir, 'packs', 'index.js'),
    `${packIndexExports.join('\n')}\n`
  );
  writeFile(
    path.join(distDir, 'packs', 'index.d.ts'),
    `${packIndexTypes.join('\n')}\n`
  );
  writeFile(
    path.join(distDir, 'packs-data', 'index.js'),
    `${packsDataExports.join('\n')}\n`
  );
  writeFile(
    path.join(distDir, 'packs-data', 'index.d.ts'),
    `${packsDataTypes.join('\n')}\n`
  );
  writeFile(path.join(distDir, 'create.js'), createZIconRuntime());
  writeFile(path.join(distDir, 'create.d.ts'), createZIconRuntimeTypes());

  const zIconCollection = CONFIG.packs.map((pack) => {
    const entries = zIconMaps
      .filter((map) => map.pack === pack)
      .map((map) => `    ${map.variant}: ${map.mapName}.${map.variant}`)
      .join(',\n');

    return `  ${pack}: {\n${entries}\n  }`;
  }).join(',\n');

  writeFile(
    path.join(distDir, 'z-icon.js'),
    `import React from 'react';\n${allPackImports.join('\n')}\n\nconst iconCollections = {\n${zIconCollection}\n};\n\nexport function ZIcon({ type, name, variant = 'light', size = 24, color, style, ...props }) {\n  const Icon = iconCollections[type]?.[variant]?.[name];\n\n  if (!Icon) {\n    return null;\n  }\n\n  return React.createElement(Icon, { size, color, style, ...props });\n}\n`
  );
  writeFile(
    path.join(distDir, 'z-icon.d.ts'),
    `import React from 'react';\nimport type { AllIconNames, IconPack, IconVariant } from '@zcorvus/icons/types';\n\nexport interface ZIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {\n  type: IconPack;\n  name: AllIconNames;\n  variant?: IconVariant;\n  size?: string | number;\n}\n\nexport declare function ZIcon(props: ZIconProps): React.ReactElement | null;\n`
  );

  writeFile(path.join(distDir, 'index.js'), `${rootExports.join('\n')}\n`);
  writeFile(path.join(distDir, 'index.d.ts'), `${rootTypes.join('\n')}\n`);
}

function createWebElementRuntime() {
  return `const DEFAULT_OPTIONS = {
  defaultVariant: 'light',
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
      color ? \` style="color: \${color};"\` : '',
      className ? \` class="\${className}"\` : '',
      host.hasAttribute('aria-hidden') ? ' aria-hidden="true"' : '',
      host.getAttribute('aria-label') ? \` aria-label="\${host.getAttribute('aria-label')}"\` : '',
      host.getAttribute('role') ? \` role="\${host.getAttribute('role')}"\` : '',
    ].join('');

    return \`<svg\${attrs}\${extraAttrs}>\`;
  });
}

export function createZIconElement(registry, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const normalizedRegistry = normalizeRegistry(registry, config.inputVariant);
  const fixedType = config.type;
  const fixedVariant = config.variant;

  return class ZIconElement extends HTMLElement {
    static observedAttributes = [
      'type',
      'name',
      'variant',
      'size',
      'color',
      'svg-class',
      'aria-hidden',
      'aria-label',
      'role',
    ];

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback() {
      this.render();
    }

    render() {
      const type = fixedType ?? this.getAttribute('type') ?? config.defaultType;
      const name = this.getAttribute('name');
      const variant = fixedVariant ?? this.getAttribute('variant') ?? config.defaultVariant;

      if (!type || !name) {
        this.innerHTML = '';
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
  return `import type { IconPack, IconVariant } from '@zcorvus/icons/types';

export type SvgVariantMap = Record<string, string>;
export type SvgPackMap = Record<string, SvgVariantMap>;
export type SvgRegistry = Record<string, SvgPackMap>;
export type FlatSvgRegistry = Record<string, SvgVariantMap>;
export type MissingIconBehavior = 'null' | 'warn' | 'error';

export interface CreateZIconElementOptions {
  defaultType?: IconPack | string;
  defaultVariant?: IconVariant | string;
  fallbackVariant?: IconVariant | string;
  fallbackPack?: IconPack | string;
  fallbackIcon?: string;
  inputVariant?: IconVariant | string;
  missing?: MissingIconBehavior;
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
`;
}

function buildWebPackage(icons, packData) {
  const distDir = path.join(CONFIG.packagesDir, 'icons-web', 'dist');
  cleanDir(distDir);

  writeFile(path.join(distDir, 'create.js'), createWebElementRuntime());
  writeFile(path.join(distDir, 'create.d.ts'), createWebElementTypes());

  const rootImports = CONFIG.packs.map((pack) => `import { ${pack}Icons } from '@zcorvus/icons/svg';`).join('\n');
  const rootRegistry = CONFIG.packs.map((pack) => `  ${pack}: ${pack}Icons`).join(',\n');

  writeFile(
    path.join(distDir, 'register.js'),
    `import { defineZIconElement } from './create.js';\n${rootImports}\n\nexport const zIconRegistry = {\n${rootRegistry}\n};\n\nexport const ZIconElement = defineZIconElement('z-icon', zIconRegistry, { defaultVariant: 'light' });\n`
  );
  writeFile(
    path.join(distDir, 'register.d.ts'),
    `export declare const zIconRegistry: Record<string, Record<string, Record<string, string>>>;\nexport declare const ZIconElement: CustomElementConstructor | undefined;\n`
  );

  const rootExports = [
    `export { createZIconElement, defineZIconElement } from './create.js';`,
    `export type { CreateZIconElementOptions, FlatSvgRegistry, MissingIconBehavior, SvgPackMap, SvgRegistry, SvgVariantMap } from './create.js';`,
  ];

  for (const pack of CONFIG.packs) {
    const variants = packData[pack] ?? {};

    for (const [variant, variantIcons] of Object.entries(variants)) {
      const suffix = getPublicVariantSuffix(variant);
      const fileName = `register-${pack}${variant === 'light' ? '' : `-${variant}`}`;
      const tagName = `z-${pack}${variant === 'light' ? '' : `-${variant}`}`;
      const registryName = `${pack}Icons${suffix}`;
      const imports = variantIcons.map((icon) => `import { ${icon.componentName} } from '@zcorvus/icons/svg/${icon.publicFileName}';`);
      const map = `export const ${registryName} = {\n${variantIcons.map((icon) => `  '${icon.name}': ${icon.componentName}`).join(',\n')}\n};`;
      const elementName = `Z${capitalize(pack)}${suffix}Element`;

      writeFile(
        path.join(distDir, `${fileName}.js`),
        `import { defineZIconElement } from './create.js';\n${imports.join('\n')}\n\n${map};\n\nexport const ${elementName} = defineZIconElement('${tagName}', { ${pack}: { ${variant}: ${registryName} } }, { type: '${pack}', variant: '${variant}', defaultVariant: '${variant}' });\n`
      );
      writeFile(
        path.join(distDir, `${fileName}.d.ts`),
        `export declare const ${registryName}: {\n${variantIcons.map((icon) => `  readonly '${icon.name}': string;`).join('\n')}\n};\nexport declare const ${elementName}: CustomElementConstructor | undefined;\n`
      );
    }
  }

  writeFile(path.join(distDir, 'index.js'), `${rootExports.filter((line) => !line.startsWith('export type')).join('\n')}\n`);
  writeFile(path.join(distDir, 'index.d.ts'), `${rootExports.join('\n')}\n`);
}

function main() {
  console.log('\nStarting ZCorvus icons build...\n');
  const { icons, packData } = getIconFiles();

  buildCorePackage(icons, packData);
  buildReactPackage(icons, packData);
  buildWebPackage(icons, packData);

  for (const pack of CONFIG.packs) {
    const total = Object.values(packData[pack] ?? {}).reduce((sum, variantIcons) => sum + variantIcons.length, 0);
    const variants = Object.keys(packData[pack] ?? {}).length;
    console.log(`Pack processed: ${pack} | ${total} icons across ${variants} variant(s)`);
  }

  console.log('\nBuild completed.\n');
}

main();
