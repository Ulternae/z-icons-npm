import { describe, expect, it } from 'vitest';
import { STANDALONE_REACT_PACKAGES } from '../scripts/build/build-core-react-packages.js';

describe('standalone React package matrix', () => {
  it('keeps small packs combined and splits Lan by variant', () => {
    expect(STANDALONE_REACT_PACKAGES).toEqual([
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
    ]);
  });

  it('does not generate removed compatibility packages', () => {
    const packageNames = STANDALONE_REACT_PACKAGES.map(({ packageName }) => packageName);

    expect(packageNames).not.toContain('@zcorvus/icons');
    expect(packageNames).not.toContain('@zcorvus/core-solid-react');
    expect(packageNames).not.toContain('@zcorvus/core-regular-duo-react');
  });
});
