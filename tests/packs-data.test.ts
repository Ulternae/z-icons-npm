import { describe, expect, it } from 'vitest';
import { bruIcons } from '@zcorvus/icons-react/packs-data/bru';
import { coreIcons } from '@zcorvus/icons-react/packs-data/core';
import { minaIcons } from '@zcorvus/icons-react/packs-data/mina';
import { minaIconsSolid } from '@zcorvus/icons-react/packs-data/mina-solid';
import { neoIcons } from '@zcorvus/icons-react/packs-data/neo';
import { neoIconsRegularDuo } from '@zcorvus/icons-react/packs-data/neo-regular-duo';
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
});
