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
      const neoRegularDuo = await import('@zcorvus/icons/svg/neo-sun-regular-duo');
      const bruGithub = await import('@zcorvus/icons/svg/bru-github');
      const names = await import('@zcorvus/icons/names');
      const getters = await import('@zcorvus/icons/getters');
      const minaGetter = await import('@zcorvus/icons/getters/mina');
      const minaSolidGetter = await import('@zcorvus/icons/getters/mina-solid');
      const bruGetter = await import('@zcorvus/icons/getters/bru');
      const types = await import('@zcorvus/icons/types');

      if (typeof root.getIconSvg !== 'function') throw new Error('missing getIconSvg');
      if (typeof getters.getMinaSvg !== 'function') throw new Error('missing getMinaSvg');
      if (typeof getters.getMinaSolidSvg !== 'function') throw new Error('missing getMinaSolidSvg');
      if (typeof getters.getBruSvg !== 'function') throw new Error('missing getBruSvg');
      if (typeof minaGetter.getMinaSvg !== 'function') throw new Error('missing direct getMinaSvg');
      if (typeof minaSolidGetter.getMinaSolidSvg !== 'function') throw new Error('missing direct getMinaSolidSvg');
      if (typeof bruGetter.getBruSvg !== 'function') throw new Error('missing direct getBruSvg');
      if (typeof svg.MinaCheck !== 'string') throw new Error('missing MinaCheck svg');
      if (typeof svg.BruGithub !== 'string') throw new Error('missing BruGithub svg');
      if (typeof minaCheck.default !== 'string') throw new Error('missing direct MinaCheck svg');
      if (typeof neoRegularDuo.NeoSunRegularDuo !== 'string') throw new Error('missing NeoSunRegularDuo svg');
      if (typeof bruGithub.default !== 'string') throw new Error('missing direct BruGithub svg');
      if (!names.minaIconNames.includes('check')) throw new Error('missing mina check name');
      if (!names.bruIconNames.includes('github')) throw new Error('missing bru github name');
      if (root.getIconSvg('bru', 'github') !== svg.BruGithub) throw new Error('missing bru getIconSvg');
      if (getters.getMinaSvg('check') !== svg.MinaCheck) throw new Error('missing getMinaSvg check');
      if (getters.getMinaSolidSvg('check') !== svg.MinaCheckSolid) throw new Error('missing getMinaSolidSvg check');
      if (getters.getBruSvg('github') !== svg.BruGithub) throw new Error('missing getBruSvg github');
      if (Object.keys(types).length !== 0) throw new Error('types entry should be runtime-empty');

      console.log('ok');
    `);

    expect(output).toBe('ok');
  }, 70000);

  it('loads react package entrypoints with Node ESM resolution', () => {
    const output = runNodeImport(`
      const zIconUrl = await import.meta.resolve('@zcorvus/icons-react/z-icon');
      const directIcon = await import('@zcorvus/icons-react/mina-check');
      const directNeoRegularDuo = await import('@zcorvus/icons-react/neo-sun-regular-duo');
      const directBruIcon = await import('@zcorvus/icons-react/bru-github');
      const minaPack = await import('@zcorvus/icons-react/packs/mina');
      const bruPack = await import('@zcorvus/icons-react/packs/bru');
      const create = await import('@zcorvus/icons-react/create');
      const minaData = await import('@zcorvus/icons-react/packs-data/mina');
      const minaSolidData = await import('@zcorvus/icons-react/packs-data/mina-solid');
      const neoRegularDuoData = await import('@zcorvus/icons-react/packs-data/neo-regular-duo');
      const bruData = await import('@zcorvus/icons-react/packs-data/bru');

      if (!zIconUrl.endsWith('/packages/icons-react/dist/z-icon.js')) throw new Error('missing ZIcon subpath');
      if (typeof directIcon.default !== 'function') throw new Error('missing direct MinaCheck component');
      if (typeof directNeoRegularDuo.NeoSunRegularDuo !== 'function') throw new Error('missing direct NeoSunRegularDuo component');
      if (typeof directBruIcon.default !== 'function') throw new Error('missing direct BruGithub component');
      if (typeof minaPack.ZMina !== 'function') throw new Error('missing ZMina');
      if (typeof bruPack.ZBru !== 'function') throw new Error('missing ZBru');
      if (typeof create.createZIcon !== 'function') throw new Error('missing createZIcon');
      if (!minaData.minaIcons) throw new Error('missing minaIcons packs-data');
      if (!minaSolidData.minaIconsSolid) throw new Error('missing minaIconsSolid packs-data');
      if (!neoRegularDuoData.neoIconsRegularDuo?.sun) throw new Error('missing neo regular-duo packs-data');
      if (!bruData.bruIcons?.github) throw new Error('missing bruIcons packs-data');

      console.log('ok');
    `);

    expect(output).toBe('ok');
  }, 70000);

  it('loads web package entrypoints with Node ESM resolution', () => {
    const output = runNodeImport(`
      const root = await import('@zcorvus/icons-web');
      const create = await import('@zcorvus/icons-web/create');
      const registerCore = await import('@zcorvus/icons-web/register-core');
      const registerNeo = await import('@zcorvus/icons-web/register-neo');
      const registerNeoRegularDuo = await import('@zcorvus/icons-web/register-neo-regular-duo');
      const registerBru = await import('@zcorvus/icons-web/register-bru');
      const registerCoreSprite = await import('@zcorvus/icons-web/register-core-sprite');
      const registerBruSprite = await import('@zcorvus/icons-web/register-bru-sprite');

      if (typeof root.createZIconElement !== 'function') throw new Error('missing createZIconElement root export');
      if (typeof create.defineZIconElement !== 'function') throw new Error('missing defineZIconElement');
      if (!registerCore.coreIcons?.sun) throw new Error('missing coreIcons web registry');
      if (!registerNeo.neoIcons?.sun) throw new Error('missing neoIcons web registry');
      if (!registerNeoRegularDuo.neoIconsRegularDuo?.sun) throw new Error('missing neo regular-duo web registry');
      if (!registerBru.bruIcons?.github) throw new Error('missing bruIcons web registry');
      if (!registerCoreSprite.coreSprite || !registerCoreSprite.coreIcons?.sun) throw new Error('missing core sprite web registry');
      if (!registerBruSprite.bruSprite || !registerBruSprite.bruIcons?.github) throw new Error('missing bru sprite web registry');

      console.log('ok');
    `);

    expect(output).toBe('ok');
  }, 70000);
});
