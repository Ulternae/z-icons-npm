import { execFileSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';

function runNodeImport(code: string) {
  return execFileSync(process.execPath, ['-e', code], {
    cwd: process.cwd(),
    encoding: 'utf8',
    timeout: 60000,
  }).trim();
}

describe('public package imports', () => {
  it('loads core package entrypoints with Node ESM resolution', () => {
    const output = runNodeImport(`
      const root = await import('@zcorvus/icons');
      const svg = await import('@zcorvus/icons/svg');
      const minaCheck = await import('@zcorvus/icons/svg/mina-check');
      const names = await import('@zcorvus/icons/names');
      const types = await import('@zcorvus/icons/types');

      if (typeof root.getIconSvg !== 'function') throw new Error('missing getIconSvg');
      if (typeof svg.MinaCheck !== 'string') throw new Error('missing MinaCheck svg');
      if (typeof minaCheck.default !== 'string') throw new Error('missing direct MinaCheck svg');
      if (!names.minaIconNames.includes('check')) throw new Error('missing mina check name');
      if (Object.keys(types).length !== 0) throw new Error('types entry should be runtime-empty');

      console.log('ok');
    `);

    expect(output).toBe('ok');
  }, 70000);

  it('loads react package entrypoints with Node ESM resolution', () => {
    const output = runNodeImport(`
      const root = await import('@zcorvus/icons-react');
      const directIcon = await import('@zcorvus/icons-react/mina-check');
      const packs = await import('@zcorvus/icons-react/packs');
      const create = await import('@zcorvus/icons-react/create');
      const packsData = await import('@zcorvus/icons-react/packs-data');

      if (typeof root.ZIcon !== 'function') throw new Error('missing ZIcon');
      if (typeof root.MinaCheck !== 'function') throw new Error('missing MinaCheck component');
      if (typeof directIcon.default !== 'function') throw new Error('missing direct MinaCheck component');
      if (typeof packs.ZMina !== 'function') throw new Error('missing ZMina');
      if (typeof create.createZIcon !== 'function') throw new Error('missing createZIcon');
      if (!packsData.minaIcons || !packsData.minaIconsSolid) throw new Error('missing packs-data');

      console.log('ok');
    `);

    expect(output).toBe('ok');
  }, 70000);
});
