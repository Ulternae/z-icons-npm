import path from 'path';
import { getDefaultVariant, getPublicVariantSuffix, getVariantFileSuffix, iconConfig as CONFIG } from '../icon-config.js';
import { ensureDir, finishOutputTracking, startOutputTracking, writeFile } from './fs-utils.js';
import { capitalize, toPascalCase } from './naming.js';
import { createSvgSprite, escapeJsString, parseSvg } from './svg-utils.js';

const STANDALONE_REACT_PACKAGES = [
  {
    pack: 'core',
    variant: 'regular',
    packageName: '@zcorvus/core-react',
    packageDir: 'core-react',
  },
  {
    pack: 'core',
    variant: 'solid',
    packageName: '@zcorvus/core-solid-react',
    packageDir: 'core-solid-react',
  },
  {
    pack: 'core',
    variant: 'regular-duo',
    packageName: '@zcorvus/core-regular-duo-react',
    packageDir: 'core-regular-duo-react',
  },
  {
    pack: 'bru',
    variant: 'solid',
    packageName: '@zcorvus/bru-react',
    packageDir: 'bru-react',
  },
];

const PACKAGE_VERSION = '0.1.0';

function createPackageJson(packageName, packName) {
  return `${JSON.stringify(
    {
      name: packageName,
      version: PACKAGE_VERSION,
      description: `Standalone React components for ZCorvus ${capitalize(packName)} icons.`,
      author: 'Ulqernesh Karvenae',
      license: 'UNLICENSED',
      type: 'module',
      main: './dist/index.js',
      types: './dist/index.d.ts',
      files: ['dist', 'README.md'],
      sideEffects: false,
      private: false,
      publishConfig: {
        access: 'public',
      },
      exports: {
        '.': {
          types: './dist/index.d.ts',
          import: './dist/index.js',
        },
        './types': {
          types: './dist/types/index.d.ts',
          import: './dist/types/index.js',
        },
        './sprite': {
          types: './dist/sprite.d.ts',
          import: './dist/sprite.js',
        },
      },
      typesVersions: {
        '*': {
          types: ['dist/types/index.d.ts'],
          sprite: ['dist/sprite.d.ts'],
          '*': ['dist/index.d.ts'],
        },
      },
      peerDependencies: {
        react: '^18.0.0 || ^19.0.0',
        'react-dom': '^18.0.0 || ^19.0.0',
      },
      peerDependenciesMeta: {
        'react-dom': {
          optional: true,
        },
      },
    },
    null,
    2
  )}\n`;
}

function createReadme(packageName, packName, componentName, spriteName, sampleIcon) {
  return `# ${packageName}\n\nStandalone React package for one ZCorvus ${capitalize(packName)} icon variant.\n\n\`\`\`tsx\nimport { ${sampleIcon.componentName}, ${componentName}, ${spriteName} } from '${packageName}';\n\nexport function Example() {\n  return (\n    <>\n      <${sampleIcon.componentName} />\n      <${spriteName} />\n      <${componentName} name=\"${sampleIcon.name}\" />\n    </>\n  );\n}\n\`\`\`\n`;
}

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

function createReactComponent(svgContent, componentName) {
  const { viewBox, children } = parseSvg(svgContent);
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

function createIndexJs({ pack, componentName, spriteComponentName, spriteExportName, viewBoxesName, variant, spriteId, iconExports }) {
  return `import { createPackIcon, createSpriteComponent } from './runtime.js';
import { ${spriteExportName} } from './sprite.js';
import { ${viewBoxesName} } from './viewboxes.js';

export { ${spriteExportName} } from './sprite.js';
export { ${viewBoxesName} } from './viewboxes.js';

export const ${spriteComponentName} = createSpriteComponent('${spriteId}', ${spriteExportName});
export const ${componentName} = createPackIcon({
  pack: '${pack}',
  variant: '${variant}',
  defaultVariant: '${getDefaultVariant(pack)}',
  spriteId: '${spriteId}',
  sprite: ${spriteExportName},
  viewBoxes: ${viewBoxesName},
});

export default ${componentName};
${iconExports.join('\n')}
`;
}

function createIndexTypes({ componentName, spriteComponentName, spriteExportName, viewBoxesName, iconNameType, iconTypeExports }) {
  return `import React from 'react';
import type { PackIconProps, ZIconSpriteProps } from './runtime.js';
export type { ${iconNameType} } from './types/index.js';
export { ${spriteExportName} } from './sprite.js';
export { ${viewBoxesName} } from './viewboxes.js';

export declare const ${spriteComponentName}: React.FC<ZIconSpriteProps>;
export type ${componentName}Props = PackIconProps<${iconNameType}>;
export declare const ${componentName}: React.FC<${componentName}Props>;
export default ${componentName};
${iconTypeExports.join('\n')}
`;
}

export function buildStandaloneReactPackages(packData, packages = STANDALONE_REACT_PACKAGES) {
  for (const packageConfig of packages) {
    const variantIcons = packData[packageConfig.pack]?.[packageConfig.variant] ?? [];

    if (variantIcons.length === 0) {
      continue;
    }

    const packName = packageConfig.pack;
    const packPascalName = toPascalCase(packName);
    const suffix = getPublicVariantSuffix(packName, packageConfig.variant);
    const fileName = `${packName}${getVariantFileSuffix(packName, packageConfig.variant)}`;
    const packageDir = path.join(CONFIG.packagesDir, packageConfig.packageDir);
    const distDir = path.join(packageDir, 'dist');
    const componentName = `Z${packPascalName}${suffix}`;
    const spriteComponentName = `${componentName}Sprite`;
    const spriteExportName = `${packName}Sprite${suffix}`;
    const viewBoxesName = `${packName}${toPascalCase(packageConfig.variant)}ViewBoxes`;
    const iconNameType = suffix ? `${packPascalName}${suffix}IconName` : `${packPascalName}IconName`;
    const sprite = createSvgSprite(packName, packageConfig.variant, variantIcons);
    const iconNames = variantIcons.map((icon) => icon.name).sort((a, b) => a.localeCompare(b));
    const viewBoxEntries = variantIcons.map((icon) => `  '${icon.name}': '${parseSvg(icon.svg).viewBox}'`).join(',\n');
    const iconExports = [];
    const iconTypeExports = [];

    ensureDir(packageDir);
    writeFile(path.join(packageDir, 'package.json'), createPackageJson(packageConfig.packageName, packName));
    writeFile(path.join(packageDir, 'README.md'), createReadme(packageConfig.packageName, packName, componentName, spriteComponentName, variantIcons[0]));

    startOutputTracking(distDir);
    for (const icon of variantIcons) {
      writeFile(path.join(distDir, `${icon.publicFileName}.js`), createReactComponent(icon.svg, icon.componentName));
      writeFile(path.join(distDir, `${icon.publicFileName}.d.ts`), createReactComponentTypes(icon.componentName));
      iconExports.push(`export { ${icon.componentName} } from './${icon.publicFileName}.js';`);
      iconTypeExports.push(`export { ${icon.componentName} } from './${icon.publicFileName}.js';`);
      iconTypeExports.push(`export type { ${icon.componentName}Props } from './${icon.publicFileName}.js';`);
    }

    writeFile(path.join(distDir, 'runtime.js'), createRuntime());
    writeFile(path.join(distDir, 'runtime.d.ts'), createRuntimeTypes());
    writeFile(path.join(distDir, 'sprite.js'), `export const ${spriteExportName} = '${escapeJsString(sprite)}';\nexport default ${spriteExportName};\n`);
    writeFile(path.join(distDir, 'sprite.d.ts'), `export declare const ${spriteExportName}: string;\nexport default ${spriteExportName};\n`);
    writeFile(path.join(distDir, 'viewboxes.js'), `export const ${viewBoxesName} = {\n${viewBoxEntries}\n};\n`);
    writeFile(path.join(distDir, 'viewboxes.d.ts'), `import type { ${iconNameType} } from './types/index.js';\n\nexport declare const ${viewBoxesName}: Record<${iconNameType}, string>;\n`);
    writeFile(path.join(distDir, 'types', 'index.js'), 'export {};\n');
    writeFile(path.join(distDir, 'types', 'index.d.ts'), createTypeUnion(iconNameType, iconNames));
    writeFile(
      path.join(distDir, 'index.js'),
      createIndexJs({
        pack: packName,
        componentName,
        spriteComponentName,
        spriteExportName,
        viewBoxesName,
        variant: packageConfig.variant,
        spriteId: fileName,
        iconExports,
      })
    );
    writeFile(
      path.join(distDir, 'index.d.ts'),
      createIndexTypes({
        componentName,
        spriteComponentName,
        spriteExportName,
        viewBoxesName,
        iconNameType,
        iconTypeExports,
      })
    );
    finishOutputTracking();
  }
}
