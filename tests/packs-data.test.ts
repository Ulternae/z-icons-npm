import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  getPublicVariantSuffix,
  getVariantFileSuffix,
  iconConfig,
} from '../scripts/icon-config.js';
import { bruIcons } from '@zcorvus/icons-react/packs-data/bru';
import { coreIcons } from '@zcorvus/icons-react/packs-data/core';
import { minaIcons } from '@zcorvus/icons-react/packs-data/mina';
import { minaIconsSolid } from '@zcorvus/icons-react/packs-data/mina-solid';
import { neoIcons } from '@zcorvus/icons-react/packs-data/neo';
import { neoIconsRegularDuo } from '@zcorvus/icons-react/packs-data/neo-regular-duo';
import { neoIconsSolid } from '@zcorvus/icons-react/packs-data/neo-solid';
import { BruGithub } from '@zcorvus/icons-react/bru-github';
import { CoreSun } from '@zcorvus/icons-react/core-sun';
import { MinaCheck } from '@zcorvus/icons-react/mina-check';
import { MinaCheckSolid } from '@zcorvus/icons-react/mina-check-solid';
import { NeoSun } from '@zcorvus/icons-react/neo-sun';
import { NeoSunRegularDuo } from '@zcorvus/icons-react/neo-sun-regular-duo';

describe('packs-data', () => {
  it('exports default variant maps without a suffix', () => {
    expect(coreIcons.sun).toBe(CoreSun);
    expect(neoIcons.sun).toBe(NeoSun);
    expect(minaIcons.check).toBe(MinaCheck);
    expect(bruIcons.github).toBe(BruGithub);
  });

  it('exports non-default variant maps with a variant suffix', () => {
    expect(minaIconsSolid.check).toBe(MinaCheckSolid);
    expect(neoIconsRegularDuo.sun).toBe(NeoSunRegularDuo);
  });

  it('generates a non-empty map for every configured pack variant', () => {
    let checkedVariants = 0;

    for (const pack of iconConfig.packs) {
      const packDir = path.join(process.cwd(), iconConfig.sourceDir, pack);
      const variants = fs.readdirSync(packDir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name);

      for (const variant of variants) {
        const suffix = getPublicVariantSuffix(pack, variant);
        const fileName = `${pack}${getVariantFileSuffix(pack, variant)}`;
        const registryName = `${pack}Icons${suffix}`;
        const generatedFile = path.join(
          process.cwd(),
          'packages',
          'icons-react',
          'dist',
          'packs-data',
          `${fileName}.js`
        );

        expect(fs.existsSync(generatedFile), `${pack}/${variant} map should exist`).toBe(true);
        expect(fs.readFileSync(generatedFile, 'utf8')).toContain(`export const ${registryName} = {`);
        checkedVariants += 1;
      }
    }

    expect(checkedVariants).toBe(13);
  });
});
