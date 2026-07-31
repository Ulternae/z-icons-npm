import fs from 'fs';
import path from 'path';
import { iconConfig as CONFIG } from '../icon-config.js';
import { getPublicFileName, getPublicIconName } from './naming.js';
import { normalizeSvgForIconStyle } from './svg-utils.js';

function getDirectoryNames(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
}

function assertConfiguredDirectories(directory, configuredNames, label) {
  const configured = new Set(configuredNames);
  const unknown = getDirectoryNames(directory).filter((name) => !configured.has(name));

  if (unknown.length > 0) {
    throw new Error(`Unknown ${label} director${unknown.length === 1 ? 'y' : 'ies'}: ${unknown.join(', ')}`);
  }
}

function registerUniqueOutput(owners, key, filePath, label) {
  const previousOwner = owners.get(key);

  if (previousOwner) {
    throw new Error(`${label} collision for "${key}": ${previousOwner} and ${filePath}`);
  }

  owners.set(key, filePath);
}

export function collectIcons(options = {}) {
  const icons = [];
  const packData = {};
  const packs = options.packs ?? CONFIG.packs;
  const identityOwners = new Map();
  const componentOwners = new Map();
  const fileOwners = new Map();

  if (!options.packs) {
    assertConfiguredDirectories(CONFIG.sourceDir, CONFIG.packs, 'icon pack');
  }

  for (const pack of packs) {
    const packDir = path.join(CONFIG.sourceDir, pack);
    assertConfiguredDirectories(packDir, CONFIG.variants, `variant in ${pack}`);

    const defaultVariant = CONFIG.defaultVariants[pack];

    if (!defaultVariant || !fs.existsSync(path.join(packDir, defaultVariant))) {
      throw new Error(`Missing configured default variant for ${pack}: ${defaultVariant ?? '<undefined>'}`);
    }

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
        const svg = normalizeSvgForIconStyle(source, pack, variant);
        const name = path.basename(file, '.svg').toLowerCase().replace(/[_\s]+/g, '-');
        const componentName = getPublicIconName(pack, name, variant);
        const publicFileName = getPublicFileName(pack, name, variant);
        const sourceFile = path.relative(process.cwd(), filePath).split(path.sep).join('/');

        if (!name) {
          throw new Error(`Icon filename resolves to an empty public name: ${sourceFile}`);
        }

        registerUniqueOutput(identityOwners, `${pack}/${variant}/${name}`, sourceFile, 'Icon identity');
        registerUniqueOutput(componentOwners, componentName, sourceFile, 'React component');
        registerUniqueOutput(fileOwners, publicFileName, sourceFile, 'Generated file');

        const icon = {
          pack,
          variant,
          name,
          componentName,
          publicFileName,
          sourceFile,
          svg,
        };

        icons.push(icon);
        packData[pack][variant].push(icon);
      }
    }
  }

  return { icons, packData };
}
