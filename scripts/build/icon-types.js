import { iconConfig as CONFIG } from '../icon-config.js';
import { getPackIconNameType, getVariantIconNameType } from './naming.js';

function createTypeUnion(typeName, values) {
  if (values.length === 0) {
    return `export type ${typeName} = never;`;
  }

  return `export type ${typeName} =\n${values.map((value) => `  | '${value}'`).join('\n')};`;
}

export function createIconTypeDefinitions(packData) {
  const typeUnions = [];
  const packTypeNames = [];

  for (const pack of CONFIG.packs) {
    const packIconNames = new Set();

    for (const [variant, variantIcons] of Object.entries(packData[pack] ?? {})) {
      const variantNames = variantIcons.map((icon) => icon.name).sort((a, b) => a.localeCompare(b));
      typeUnions.push(createTypeUnion(getVariantIconNameType(pack, variant), variantNames));

      for (const icon of variantIcons) {
        packIconNames.add(icon.name);
      }
    }

    const packTypeName = getPackIconNameType(pack);
    packTypeNames.push(packTypeName);
    typeUnions.push(createTypeUnion(packTypeName, [...packIconNames].sort((a, b) => a.localeCompare(b))));
  }

  const variantUnion = createTypeUnion('IconVariant', CONFIG.variants);
  const iconNameMap = CONFIG.packs.map((pack) => {
    const entries = Object.keys(packData[pack] ?? {})
      .map((variant) => `    '${variant}': ${getVariantIconNameType(pack, variant)};`)
      .join('\n');

    return `  '${pack}': {\n${entries}\n  };`;
  }).join('\n');

  return `${typeUnions.join('\n\n')}\n\nexport type AllIconNames = ${packTypeNames.join(' | ')};\nexport type IconPack = ${CONFIG.packs.map((pack) => `'${pack}'`).join(' | ')};\n${variantUnion}\n\nexport interface IconNameMap {\n${iconNameMap}\n}\n\nexport type IconVariantFor<TPack extends IconPack> = Extract<keyof IconNameMap[TPack], string>;\nexport type IconNameFor<\n  TPack extends IconPack,\n  TVariant extends IconVariantFor<TPack>,\n> = IconNameMap[TPack][TVariant];\n`;
}
