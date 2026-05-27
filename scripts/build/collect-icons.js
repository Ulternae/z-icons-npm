import fs from 'fs';
import path from 'path';
import { iconConfig as CONFIG } from '../icon-config.js';
import { getPublicFileName, getPublicIconName } from './naming.js';
import { normalizeSvgForIconStyle } from './svg-utils.js';

export function collectIcons() {
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
        const svg = normalizeSvgForIconStyle(source, pack, variant);
        const name = path.basename(file, '.svg').toLowerCase().replace(/[_\s]+/g, '-');
        const icon = {
          pack,
          variant,
          name,
          componentName: getPublicIconName(pack, name, variant),
          publicFileName: getPublicFileName(pack, name, variant),
          svg,
        };

        icons.push(icon);
        packData[pack][variant].push(icon);
      }
    }
  }

  return { icons, packData };
}
