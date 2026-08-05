import path from 'path';
import { getDefaultVariant, getPublicVariantSuffix, getVariantFileSuffix, iconConfig as CONFIG } from '../icon-config.js';
import { createOutputWriter } from './fs-utils.js';
import { capitalize, toPascalCase } from './naming.js';
import { createSvgSprite, escapeJsString, parseSvg } from './svg-utils.js';

export const STANDALONE_REACT_PACKAGES = [
  {
    pack: 'core',
    variants: ['regular', 'solid', 'regular-duo'],
    packageName: '@zcorvus/core-react',
    packageDir: 'core-react',
  },
  {
    pack: 'neo',
    variants: ['regular', 'solid', 'regular-duo'],
    packageName: '@zcorvus/neo-react',
    packageDir: 'neo-react',
  },
  {
    pack: 'mina',
    variants: ['light', 'solid'],
    packageName: '@zcorvus/mina-react',
    packageDir: 'mina-react',
  },
  {
    pack: 'bru',
    variants: ['solid'],
    packageName: '@zcorvus/bru-react',
    packageDir: 'bru-react',
  },
  ...['light', 'regular', 'solid', 'thin'].map((variant) => ({
    pack: 'lan',
    variants: [variant],
    packageName: `@zcorvus/lan-react-${variant}`,
    packageDir: `lan-react-${variant}`,
  })),
];

function createTypeUnion(typeName, values) {
  return `export type ${typeName} = ${values.map((value) => `'${value}'`).join(' | ')};\n`;
}

function createRuntime() {
  return `import React from 'react';

const SPRITE_ATTR = 'data-zcorvus-react-sprite';
const HIDDEN_SPRITE_STYLE = {
  position: 'absolute',
  width: 0,
  height: 0,
  overflow: 'hidden',
};
const scheduledSpriteIds = new Set();

function getSpriteBody(sprite) {
  const match = sprite.match(/<svg[^>]*>([\\s\\S]*?)<\\/svg>/);

  return match ? match[1].trim() : sprite;
}

function scheduleClientTask(callback) {
  if (typeof queueMicrotask === 'function') {
    queueMicrotask(callback);
    return;
  }

  Promise.resolve().then(callback);
}

export function getSpriteSymbolId(pack, name, variant, defaultVariant) {
  return \`\${pack}-\${variant === defaultVariant ? name : \`\${name}-\${variant}\`}\`;
}

export function injectZSprite(spriteId, sprite) {
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

export function scheduleZSprite(spriteId, sprite) {
  if (typeof document === 'undefined' || scheduledSpriteIds.has(spriteId)) {
    return;
  }

  if (document.querySelector(\`[\${SPRITE_ATTR}="\${spriteId}"]\`)) {
    return;
  }

  scheduledSpriteIds.add(spriteId);
  scheduleClientTask(() => {
    injectZSprite(spriteId, sprite);
    scheduledSpriteIds.delete(spriteId);
  });
}

export function createSpriteComponent(spriteId, sprite) {
  return function ZPackSprite(props) {
    return React.createElement('svg', {
      ...props,
      xmlns: 'http://www.w3.org/2000/svg',
      'aria-hidden': props['aria-hidden'] ?? true,
      [SPRITE_ATTR]: spriteId,
      style: { ...HIDDEN_SPRITE_STYLE, ...props.style },
      dangerouslySetInnerHTML: { __html: getSpriteBody(sprite) },
    });
  };
}

export function createPackIcon({ pack, variant, defaultVariant, spriteId, sprite, viewBoxes }) {
  return function ZPackIcon({ name, size = 24, color, style, ...props }) {
    const viewBox = viewBoxes[name];

    if (!viewBox) {
      return null;
    }

    scheduleZSprite(spriteId, sprite);

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

function createRuntimeTypes() {
  return `import React from 'react';

export interface PackIconProps<TName extends string> extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  name: TName;
  size?: string | number;
}

export interface ZIconSpriteProps extends Omit<React.SVGProps<SVGSVGElement>, 'children' | 'dangerouslySetInnerHTML'> {}

export declare function getSpriteSymbolId(pack: string, name: string, variant: string, defaultVariant: string): string;
export declare function injectZSprite(spriteId: string, sprite: string): Element | undefined;
export declare function scheduleZSprite(spriteId: string, sprite: string): void;
export declare function createSpriteComponent(spriteId: string, sprite: string): React.FC<ZIconSpriteProps>;

export declare function createPackIcon<TName extends string>(
  options: {
    pack: string;
    variant: string;
    defaultVariant: string;
    spriteId: string;
    sprite: string;
    viewBoxes: Record<TName, string>;
  }
): React.FC<PackIconProps<TName>>;
`;
}

function createReactComponent(svgContent, componentName, sourceFile) {
  const { viewBox, children } = parseSvg(svgContent, sourceFile);
  const childrenCode = children.length > 0 ? `, ${children.join(', ')}` : '';

  return `import React from 'react';

export function ${componentName}({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '${viewBox}',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }${childrenCode}
  );
}

export default ${componentName};
`;
}

function createReactComponentTypes(componentName) {
  return `import React from 'react';

export interface ${componentName}Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function ${componentName}(props: ${componentName}Props): React.ReactElement;
export default ${componentName};
`;
}

function createIndexJs({ pack, variants, defaultComponentName, iconExports }) {
  const imports = variants.flatMap((variant) => [
    `import { ${variant.spriteExportName} } from './${variant.spriteFileName}.js';`,
    `import { ${variant.viewBoxesName} } from './${variant.viewBoxesFileName}.js';`,
  ]);
  const assetExports = variants.flatMap((variant) => [
    `export { ${variant.spriteExportName} } from './${variant.spriteFileName}.js';`,
    `export { ${variant.viewBoxesName} } from './${variant.viewBoxesFileName}.js';`,
  ]);
  const componentDeclarations = variants.flatMap((variant) => [
    `export const ${variant.spriteComponentName} = createSpriteComponent('${variant.spriteId}', ${variant.spriteExportName});`,
    `export const ${variant.componentName} = createPackIcon({
  pack: '${pack}',
  variant: '${variant.variant}',
  defaultVariant: '${getDefaultVariant(pack)}',
  spriteId: '${variant.spriteId}',
  sprite: ${variant.spriteExportName},
  viewBoxes: ${variant.viewBoxesName},
});`,
  ]);

  return `import { createPackIcon, createSpriteComponent } from './runtime.js';
${imports.join('\n')}

${assetExports.join('\n')}

${componentDeclarations.join('\n\n')}

export default ${defaultComponentName};
${iconExports.join('\n')}
`;
}

function createIndexTypes({ variants, defaultComponentName, iconTypeExports }) {
  const typeNames = variants.map((variant) => variant.iconNameType).join(', ');
  const assetExports = variants.flatMap((variant) => [
    `export { ${variant.spriteExportName} } from './${variant.spriteFileName}.js';`,
    `export { ${variant.viewBoxesName} } from './${variant.viewBoxesFileName}.js';`,
  ]);
  const componentDeclarations = variants.flatMap((variant) => [
    `export declare const ${variant.spriteComponentName}: React.FC<ZIconSpriteProps>;`,
    `export type ${variant.componentName}Props = PackIconProps<${variant.iconNameType}>;`,
    `export declare const ${variant.componentName}: React.FC<${variant.componentName}Props>;`,
  ]);

  return `import React from 'react';
import type { PackIconProps, ZIconSpriteProps } from './runtime.js';
import type { ${typeNames} } from './types/index.js';
export type { ${typeNames} } from './types/index.js';
${assetExports.join('\n')}

${componentDeclarations.join('\n')}
export default ${defaultComponentName};
${iconTypeExports.join('\n')}
`;
}

export function buildStandaloneReactPackages(packData, packages = STANDALONE_REACT_PACKAGES) {
  const results = [];

  for (const packageConfig of packages) {
    const availableVariants = packageConfig.variants.filter(
      (variant) => (packData[packageConfig.pack]?.[variant]?.length ?? 0) > 0
    );

    if (availableVariants.length === 0) {
      continue;
    }

    const packName = packageConfig.pack;
    const packPascalName = toPascalCase(packName);
    const packageDir = path.join(CONFIG.packagesDir, packageConfig.packageDir);
    const distDir = path.join(packageDir, 'dist');
    const iconExports = [];
    const iconTypeExports = [];
    const typeDefinitions = [];
    const variants = [];

    const { writeFile, finish } = createOutputWriter(distDir);
    for (const variant of availableVariants) {
      const variantIcons = packData[packName][variant];
      const suffix = getPublicVariantSuffix(packName, variant);
      const spriteId = `${packName}${getVariantFileSuffix(packName, variant)}`;
      const componentName = `Z${packPascalName}${suffix}`;
      const spriteComponentName = `${componentName}Sprite`;
      const spriteExportName = `${packName}Sprite${suffix}`;
      const viewBoxesName = `${packName}${toPascalCase(variant)}ViewBoxes`;
      const iconNameType = suffix ? `${packPascalName}${suffix}IconName` : `${packPascalName}IconName`;
      const assetSuffix = availableVariants.length === 1 ? '' : getVariantFileSuffix(packName, variant);
      const spriteFileName = `sprite${assetSuffix}`;
      const viewBoxesFileName = `viewboxes${assetSuffix}`;
      const sprite = createSvgSprite(packName, variant, variantIcons);
      const iconNames = variantIcons.map((icon) => icon.name).sort((a, b) => a.localeCompare(b));
      const viewBoxEntries = variantIcons
        .map((icon) => `  '${icon.name}': '${parseSvg(icon.svg, icon.sourceFile).viewBox}'`)
        .join(',\n');

      for (const icon of variantIcons) {
        writeFile(
          path.join(distDir, `${icon.publicFileName}.js`),
          createReactComponent(icon.svg, icon.componentName, icon.sourceFile)
        );
        writeFile(path.join(distDir, `${icon.publicFileName}.d.ts`), createReactComponentTypes(icon.componentName));
        iconExports.push(`export { ${icon.componentName} } from './${icon.publicFileName}.js';`);
        iconTypeExports.push(`export { ${icon.componentName} } from './${icon.publicFileName}.js';`);
        iconTypeExports.push(`export type { ${icon.componentName}Props } from './${icon.publicFileName}.js';`);
      }

      writeFile(
        path.join(distDir, `${spriteFileName}.js`),
        `export const ${spriteExportName} = '${escapeJsString(sprite)}';\nexport default ${spriteExportName};\n`
      );
      writeFile(
        path.join(distDir, `${spriteFileName}.d.ts`),
        `export declare const ${spriteExportName}: string;\nexport default ${spriteExportName};\n`
      );
      writeFile(
        path.join(distDir, `${viewBoxesFileName}.js`),
        `export const ${viewBoxesName} = {\n${viewBoxEntries}\n};\n`
      );
      writeFile(
        path.join(distDir, `${viewBoxesFileName}.d.ts`),
        `import type { ${iconNameType} } from './types/index.js';\n\nexport declare const ${viewBoxesName}: Record<${iconNameType}, string>;\n`
      );
      typeDefinitions.push(createTypeUnion(iconNameType, iconNames));
      variants.push({
        variant,
        componentName,
        spriteComponentName,
        spriteExportName,
        viewBoxesName,
        iconNameType,
        spriteId,
        spriteFileName,
        viewBoxesFileName,
      });
    }

    writeFile(path.join(distDir, 'runtime.js'), createRuntime());
    writeFile(path.join(distDir, 'runtime.d.ts'), createRuntimeTypes());
    writeFile(path.join(distDir, 'types', 'index.js'), 'export {};\n');
    writeFile(path.join(distDir, 'types', 'index.d.ts'), typeDefinitions.join('\n'));
    const defaultVariant = variants.find((variant) => variant.variant === getDefaultVariant(packName)) ?? variants[0];
    writeFile(
      path.join(distDir, 'index.js'),
      createIndexJs({
        pack: packName,
        variants,
        defaultComponentName: defaultVariant.componentName,
        iconExports,
      })
    );
    writeFile(
      path.join(distDir, 'index.d.ts'),
      createIndexTypes({
        variants,
        defaultComponentName: defaultVariant.componentName,
        iconTypeExports,
      })
    );
    results.push({ packageName: packageConfig.packageName, ...finish() });
  }

  return results;
}
