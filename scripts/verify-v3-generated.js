import fs from 'node:fs';
import path from 'node:path';
import { iconConfig } from './icon-config.js';

for (const name of ['icons', 'icons-react']) {
  const root = path.join('packages', name);
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  for (const [subpath, conditions] of Object.entries(manifest.exports)) {
    for (const target of Object.values(conditions)) {
      if (target.includes('*')) continue;
      if (!fs.existsSync(path.join(root, target))) {
        throw new Error(`${name} ${subpath} is missing ${target}`);
      }
    }
  }
  for (const pack of iconConfig.packs) {
    const relative = name === 'icons' ? `dist/data/${pack}` : `dist/react/${pack}`;
    const generatedDir = path.join(root, relative);
    if (!fs.existsSync(generatedDir)) throw new Error(`${name} has no ${pack} output`);
    const expected = iconConfig.variants.reduce((count, variant) => {
      const sourceDir = path.join(iconConfig.sourceDir, pack, variant);
      return count + (fs.existsSync(sourceDir)
        ? fs.readdirSync(sourceDir).filter((file) => file.endsWith('.svg')).length
        : 0);
    }, 0);
    const actual = fs.readdirSync(generatedDir).filter((file) => file.endsWith('.js')).length;
    if (actual !== expected) throw new Error(`${name}/${pack}: expected ${expected} icons, found ${actual}`);
  }
}
console.log('v3 package exports and packs are present.');
