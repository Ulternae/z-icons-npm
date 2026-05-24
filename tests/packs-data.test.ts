import { describe, expect, it } from 'vitest';
import {
  bruIcons,
  coreIcons,
  minaIcons,
  minaIconsSolid,
  neoIcons,
} from '@zcorvus/icons-react/packs-data';
import {
  BruGithub,
  CoreSun,
  MinaCheck,
  MinaCheckSolid,
  NeoSun,
} from '@zcorvus/icons-react';

describe('packs-data', () => {
  it('exports default variant maps without a suffix', () => {
    expect(coreIcons.sun).toBe(CoreSun);
    expect(neoIcons.sun).toBe(NeoSun);
    expect(minaIcons.check).toBe(MinaCheck);
    expect(bruIcons.github).toBe(BruGithub);
  });

  it('exports non-default variant maps with a variant suffix', () => {
    expect(minaIconsSolid.check).toBe(MinaCheckSolid);
  });
});
