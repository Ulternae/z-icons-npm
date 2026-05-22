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

  it('loads web package entrypoints with Node ESM resolution', () => {
    const output = runNodeImport(`
      const root = await import('@zcorvus/icons-web');
      const create = await import('@zcorvus/icons-web/create');
      const register = await import('@zcorvus/icons-web/register');
      const registerCore = await import('@zcorvus/icons-web/register-core');
      const registerNeo = await import('@zcorvus/icons-web/register-neo');
      const registerCoreSprite = await import('@zcorvus/icons-web/register-core-sprite');

      if (typeof root.createZIconElement !== 'function') throw new Error('missing createZIconElement root export');
      if (typeof create.defineZIconElement !== 'function') throw new Error('missing defineZIconElement');
      if (!register.zIconRegistry) throw new Error('missing zIconRegistry');
      if (!registerCore.coreIcons?.sun) throw new Error('missing coreIcons web registry');
      if (!registerNeo.neoIcons?.sun) throw new Error('missing neoIcons web registry');
      if (!registerCoreSprite.coreSprite || !registerCoreSprite.coreIcons?.sun) throw new Error('missing core sprite web registry');

      console.log('ok');
    `);

    expect(output).toBe('ok');
  }, 70000);
});
