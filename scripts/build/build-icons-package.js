import path from 'path';
import {
  getDefaultVariant,
  getPublicVariantSuffix,
  getVariantFileSuffix,
  iconConfig as CONFIG,
} from '../icon-config.js';
import { createOutputWriter } from './fs-utils.js';
import { capitalize, getPackIconNameType, getVariantIconNameType } from './naming.js';
import { createSvgSprite, escapeJsString } from './svg-utils.js';

function createTypeUnion(typeName, values) {
  if (values.length === 0) {
    return `export type ${typeName} = never;`;
  }

  return `export type ${typeName} =\n${values.map((value) => `  | '${value}'`).join('\n')};`;
}

export function buildIconsPackage(icons, packData) {
  const distDir = path.join(CONFIG.packagesDir, 'icons', 'dist');
  const { writeFile, finish } = createOutputWriter(distDir);

  const componentNames = new Set(icons.map((icon) => icon.componentName));
  const svgExports = [];
  const svgTypes = [];
  const packDictionaryExports = [];
  const packDictionaryTypes = [];
  const nameExports = [];
  const nameTypes = [];
  const spriteExports = [];
  const getterExports = [];
  const getterTypes = [];
  const typeUnions = [];
  const variantTypeNames = [];
  const packNames = {};

  for (const icon of icons) {
    writeFile(
      path.join(distDir, 'svg', `${icon.publicFileName}.js`),
      `export const ${icon.componentName} = '${escapeJsString(icon.svg)}';\nexport default ${icon.componentName};\n`
    );
    writeFile(
      path.join(distDir, 'svg', `${icon.publicFileName}.d.ts`),
      `export declare const ${icon.componentName}: string;\nexport default ${icon.componentName};\n`
    );

    const defaultExportName = `${icon.componentName}Svg`;

    if (componentNames.has(defaultExportName)) {
      svgExports.push(`export { ${icon.componentName} } from './${icon.publicFileName}.js';`);
      svgTypes.push(`export { ${icon.componentName} } from './${icon.publicFileName}.js';`);
    } else {
      svgExports.push(`export { ${icon.componentName}, default as ${defaultExportName} } from './${icon.publicFileName}.js';`);
      svgTypes.push(`export { ${icon.componentName}, default as ${defaultExportName} } from './${icon.publicFileName}.js';`);
    }

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
      variantObjects.push(`  '${variant}': {\n${variantIcons.map((icon) => `    '${icon.name}': ${icon.componentName}`).join(',\n')}\n  }`);

      const variantTypeName = getVariantIconNameType(pack, variant);
      const variantNames = variantIcons.map((icon) => icon.name).sort((a, b) => a.localeCompare(b));
      typeUnions.push(createTypeUnion(variantTypeName, variantNames));
      variantTypeNames.push(variantTypeName);
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
    typeUnions.push(createTypeUnion(getPackIconNameType(pack), iconNames));
  }

  for (const pack of CONFIG.packs) {
    const variants = packData[pack] ?? {};

    for (const [variant, variantIcons] of Object.entries(variants)) {
      const suffix = getPublicVariantSuffix(pack, variant);
      const spriteName = `${pack}Sprite${suffix}`;
      const fileName = `${pack}${getVariantFileSuffix(pack, variant)}`;
      const sprite = createSvgSprite(pack, variant, variantIcons);

      writeFile(path.join(distDir, 'sprites', `${fileName}.svg`), sprite);
      writeFile(
        path.join(distDir, 'sprites', `${fileName}.js`),
        `export const ${spriteName} = '${escapeJsString(sprite)}';\nexport default ${spriteName};\n`
      );
      writeFile(
        path.join(distDir, 'sprites', `${fileName}.d.ts`),
        `export declare const ${spriteName}: string;\nexport default ${spriteName};\n`
      );

      spriteExports.push(`export { ${spriteName}, default as ${spriteName}Svg } from './${fileName}.js';`);
    }
  }

  for (const pack of CONFIG.packs) {
    const variants = packData[pack] ?? {};

    for (const [variant, variantIcons] of Object.entries(variants)) {
      const suffix = getPublicVariantSuffix(pack, variant);
      const getterName = `get${capitalize(pack)}${suffix}Svg`;
      const fileName = `${pack}${getVariantFileSuffix(pack, variant)}`;
      const iconMapName = `${pack}${suffix}SvgMap`;
      const iconNameType = getVariantIconNameType(pack, variant);
      const imports = variantIcons.map((icon) => `import { ${icon.componentName} } from '../svg/${icon.publicFileName}.js';`);
      const mapEntries = variantIcons.map((icon) => `  '${icon.name}': ${icon.componentName}`).join(',\n');

      writeFile(
        path.join(distDir, 'getters', `${fileName}.js`),
        `${imports.join('\n')}\n\nconst ${iconMapName} = {\n${mapEntries}\n};\n\nexport function ${getterName}(name) {\n  return ${iconMapName}[name];\n}\n\nexport default ${getterName};\n`
      );
      writeFile(
        path.join(distDir, 'getters', `${fileName}.d.ts`),
        `import type { ${iconNameType} } from '../types/index.js';\n\nexport declare function ${getterName}(name: ${iconNameType}): string | undefined;\nexport default ${getterName};\n`
      );

      getterExports.push(`export { ${getterName}, default as ${getterName}Default } from './${fileName}.js';`);
      getterTypes.push(`export { ${getterName}, default as ${getterName}Default } from './${fileName}.js';`);
    }
  }

  writeFile(path.join(distDir, 'svg', 'index.js'), `${svgExports.join('\n')}\n${packDictionaryExports.join('\n')}\n`);
  writeFile(path.join(distDir, 'svg', 'index.d.ts'), `${svgTypes.join('\n')}\n${packDictionaryTypes.join('\n')}\n`);
  writeFile(path.join(distDir, 'names', 'index.js'), `${nameExports.join('\n')}\n`);
  writeFile(path.join(distDir, 'names', 'index.d.ts'), `${nameTypes.join('\n')}\n`);
  writeFile(path.join(distDir, 'sprites', 'index.js'), `${spriteExports.join('\n')}\n`);
  writeFile(path.join(distDir, 'sprites', 'index.d.ts'), `${spriteExports.join('\n')}\n`);
  writeFile(path.join(distDir, 'getters', 'index.js'), `${getterExports.join('\n')}\n`);
  writeFile(path.join(distDir, 'getters', 'index.d.ts'), `${getterTypes.join('\n')}\n`);

  const variantUnion = createTypeUnion('IconVariant', CONFIG.variants);
  const iconNameMap = CONFIG.packs.map((pack) => {
    const variants = Object.keys(packData[pack] ?? {});
    const entries = variants
      .map((variant) => `    '${variant}': ${getVariantIconNameType(pack, variant)};`)
      .join('\n');

    return `  '${pack}': {\n${entries}\n  };`;
  }).join('\n');
  const typeContent = `${typeUnions.join('\n\n')}\n\nexport type AllIconNames = ${CONFIG.packs.map((pack) => getPackIconNameType(pack)).join(' | ')};\nexport type IconPack = ${CONFIG.packs.map((pack) => `'${pack}'`).join(' | ')};\n${variantUnion}\n\nexport interface IconNameMap {\n${iconNameMap}\n}\n\nexport type IconVariantFor<TPack extends IconPack> = Extract<keyof IconNameMap[TPack], string>;\nexport type IconNameFor<\n  TPack extends IconPack,\n  TVariant extends IconVariantFor<TPack>,\n> = IconNameMap[TPack][TVariant];\n`;

  writeFile(path.join(distDir, 'types', 'index.js'), 'export {};\n');
  writeFile(path.join(distDir, 'types', 'index.d.ts'), typeContent);

  const rootImports = CONFIG.packs.map((pack) => `import { ${pack}Icons } from './svg/${pack}.js';`).join('\n');
  const rootExports = CONFIG.packs.map((pack) => `export { ${pack}Icons } from './svg/${pack}.js';`).join('\n');
  const rootNames = CONFIG.packs.map((pack) => `export { ${pack}IconNames } from './names/${pack}.js';`).join('\n');
  const rootIconMap = CONFIG.packs.map((pack) => `  ${pack}: ${pack}Icons`).join(',\n');
  const rootDefaultVariantMap = CONFIG.packs.map((pack) => `  ${pack}: '${getDefaultVariant(pack)}'`).join(',\n');
  const rootTypeExports = [
    'AllIconNames',
    ...CONFIG.packs.map((pack) => `${capitalize(pack)}IconName`),
    ...variantTypeNames,
    'IconNameFor',
    'IconNameMap',
    'IconPack',
    'IconVariant',
    'IconVariantFor',
  ].join(', ');
  const rootNameExports = CONFIG.packs.map((pack) => `${pack}IconNames`).join(', ');
  const rootSvgExports = CONFIG.packs.map((pack) => `${pack}Icons`).join(', ');

  writeFile(
    path.join(distDir, 'index.js'),
    `${rootImports}\n\nconst iconCollections = {\n${rootIconMap}\n};\n\nconst defaultVariants = {\n${rootDefaultVariantMap}\n};\n\nexport function getIconSvg(pack, name, variant) {\n  const resolvedVariant = variant ?? defaultVariants[pack] ?? 'light';\n\n  return iconCollections[pack]?.[resolvedVariant]?.[name];\n}\n\n${rootExports}\n${rootNames}\n`
  );
  writeFile(
    path.join(distDir, 'index.d.ts'),
    `import type { AllIconNames, IconPack, IconVariant } from './types/index.js';\nexport type { ${rootTypeExports} } from './types/index.js';\nexport { ${rootNameExports} } from './names/index.js';\nexport { ${rootSvgExports} } from './svg/index.js';\nexport declare function getIconSvg(pack: IconPack, name: AllIconNames, variant?: IconVariant): string | undefined;\n`
  );
  return finish();
}
