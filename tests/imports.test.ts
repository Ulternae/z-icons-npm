import { execFileSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';

const NODE_IMPORT_TIMEOUT_MS = 120000;
const IMPORT_TEST_TIMEOUT_MS = NODE_IMPORT_TIMEOUT_MS + 10000;

function runNodeImport(code: string) {
  return execFileSync(process.execPath, ['-e', code], {
    cwd: process.cwd(),
    encoding: 'utf8',
    timeout: NODE_IMPORT_TIMEOUT_MS,
  }).trim();
}

describe('public package imports', () => {
  it('loads react package entrypoints with Node ESM resolution', () => {
    const output = runNodeImport(`
      const fs = await import('node:fs');
      const path = await import('node:path');
      const zIconUrl = await import.meta.resolve('@zcorvus/icons-react/z-icon');
      const directIcon = await import('@zcorvus/icons-react/mina-check');
      const directNeoRegularDuo = await import('@zcorvus/icons-react/neo-sun-regular-duo');
      const directBruIcon = await import('@zcorvus/icons-react/bru-github');
      const minaPack = await import('@zcorvus/icons-react/packs/mina');
      const corePack = await import('@zcorvus/icons-react/packs/core');
      const bruPack = await import('@zcorvus/icons-react/packs/bru');
      const create = await import('@zcorvus/icons-react/create');
      const reactTypes = await import('@zcorvus/icons-react/types');
      const minaData = await import('@zcorvus/icons-react/packs-data/mina');
      const minaSolidData = await import('@zcorvus/icons-react/packs-data/mina-solid');
      const neoRegularDuoData = await import('@zcorvus/icons-react/packs-data/neo-regular-duo');
      const bruData = await import('@zcorvus/icons-react/packs-data/bru');
      const reactPackage = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'packages/icons-react/package.json'), 'utf8'));

      if (reactPackage.version !== '0.2.0') throw new Error('icons-react should be version 0.2.0');
      if (reactPackage.dependencies?.['@zcorvus/icons']) throw new Error('icons-react should be self-contained');

      if (!zIconUrl.endsWith('/packages/icons-react/dist/z-icon.js')) throw new Error('missing ZIcon subpath');
      if (typeof directIcon.default !== 'function') throw new Error('missing direct MinaCheck component');
      if (typeof directNeoRegularDuo.NeoSunRegularDuo !== 'function') throw new Error('missing direct NeoSunRegularDuo component');
      if (typeof directBruIcon.default !== 'function') throw new Error('missing direct BruGithub component');
      if (typeof minaPack.ZMina !== 'function') throw new Error('missing ZMina');
      if (typeof corePack.ZCoreSprite !== 'function') throw new Error('missing ZCoreSprite');
      if (typeof bruPack.ZBru !== 'function') throw new Error('missing ZBru');
      if (typeof create.createZIcon !== 'function') throw new Error('missing createZIcon');
      if (Object.keys(reactTypes).length !== 0) throw new Error('react types entry should be runtime-empty');
      if (!minaData.minaIcons) throw new Error('missing minaIcons packs-data');
      if (!minaSolidData.minaIconsSolid) throw new Error('missing minaIconsSolid packs-data');
      if (!neoRegularDuoData.neoIconsRegularDuo?.sun) throw new Error('missing neo regular-duo packs-data');
      if (!bruData.bruIcons?.github) throw new Error('missing bruIcons packs-data');

      console.log('ok');
    `);

    expect(output).toBe('ok');
  }, IMPORT_TEST_TIMEOUT_MS);

  it('keeps react dynamic wrappers sprite-based', () => {
    const output = runNodeImport(`
      const fs = await import('node:fs');
      const path = await import('node:path');

      const corePack = fs.readFileSync(path.join(process.cwd(), 'packages/icons-react/dist/packs/core.js'), 'utf8');
      const zIcon = fs.readFileSync(path.join(process.cwd(), 'packages/icons-react/dist/z-icon.js'), 'utf8');

      if (!corePack.includes("from '../sprites/core.js'")) throw new Error('ZCore should import its local core sprite');
      if (!corePack.includes('ZCoreSprite')) throw new Error('ZCoreSprite should be generated');
      if (corePack.includes("from '../core-sun.js'")) throw new Error('ZCore should not import individual icon components');
      if (!zIcon.includes("import('./sprites/core.js')")) throw new Error('ZIcon should lazy-load local sprites');
      if (corePack.includes('@zcorvus/icons')) throw new Error('pack wrappers should not import @zcorvus/icons');
      if (zIcon.includes('@zcorvus/icons')) throw new Error('ZIcon should not import @zcorvus/icons');
      if (zIcon.includes("from './packs/core.js'")) throw new Error('ZIcon should not import pack wrappers');
      if (corePack.includes('useEffect')) throw new Error('pack wrappers should be server-component safe');
      if (zIcon.includes('useEffect')) throw new Error('ZIcon should be server-component safe');

      console.log('ok');
    `);

    expect(output).toBe('ok');
  }, IMPORT_TEST_TIMEOUT_MS);

  it('loads combined pack-scoped React packages with Node ESM resolution', () => {
    const output = runNodeImport(`
      const fs = await import('node:fs');
      const path = await import('node:path');
      const React = await import('react');
      const { renderToString } = await import('react-dom/server');
      const core = await import('@zcorvus/core-react');
      const neo = await import('@zcorvus/neo-react');
      const mina = await import('@zcorvus/mina-react');
      const bru = await import('@zcorvus/bru-react');
      const coreTypes = await import('@zcorvus/core-react/types');
      const coreSprite = await import('@zcorvus/core-react/sprite');
      const coreSolidSprite = await import('@zcorvus/core-react/sprite-solid');

      const packageDirs = [
        'core-react',
        'neo-react',
        'mina-react',
        'bru-react',
      ];
      for (const packageDir of packageDirs) {
        const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'packages', packageDir, 'package.json'), 'utf8'));
        if (pkg.version !== '0.2.0') throw new Error(packageDir + ' should be version 0.2.0');
        if (pkg.dependencies?.['@zcorvus/icons']) throw new Error(packageDir + ' should not depend on @zcorvus/icons');
        if (pkg.dependencies?.['@zcorvus/icons-react']) throw new Error(packageDir + ' should not depend on @zcorvus/icons-react');
      }

      if (typeof core.ZCore !== 'function') throw new Error('missing standalone ZCore');
      if (typeof core.ZCoreSprite !== 'function') throw new Error('missing standalone ZCoreSprite');
      if (typeof core.CoreAngleDown !== 'function') throw new Error('missing standalone CoreAngleDown');
      if (typeof core.ZCoreSolid !== 'function') throw new Error('missing standalone ZCoreSolid');
      if (typeof core.ZCoreSolidSprite !== 'function') throw new Error('missing standalone ZCoreSolidSprite');
      if (typeof core.CoreAngleDownSolid !== 'function') throw new Error('missing standalone CoreAngleDownSolid');
      if (typeof core.ZCoreRegularDuo !== 'function') throw new Error('missing standalone ZCoreRegularDuo');
      if (typeof core.CoreAngleDownRegularDuo !== 'function') throw new Error('missing standalone CoreAngleDownRegularDuo');
      if (typeof neo.NeoSunSolid !== 'function') throw new Error('missing standalone NeoSunSolid');
      if (typeof neo.NeoSunRegularDuo !== 'function') throw new Error('missing standalone NeoSunRegularDuo');
      if (typeof mina.MinaCheck !== 'function') throw new Error('missing standalone MinaCheck');
      if (typeof mina.MinaCheckSolid !== 'function') throw new Error('missing standalone MinaCheckSolid');
      if (typeof bru.ZBru !== 'function') throw new Error('missing standalone ZBru');
      if (typeof bru.ZBruSprite !== 'function') throw new Error('missing standalone ZBruSprite');
      if (typeof bru.BruGithub !== 'function') throw new Error('missing standalone BruGithub');
      if (!core.coreRegularViewBoxes.crown) throw new Error('missing standalone core viewBoxes');
      if (!core.coreSolidViewBoxes.crown) throw new Error('missing standalone solid core viewBoxes');
      if (!bru.bruSolidViewBoxes.github) throw new Error('missing standalone bru viewBoxes');
      if (Object.keys(coreTypes).length !== 0) throw new Error('standalone core types entry should be runtime-empty');
      if (typeof coreSprite.coreSprite !== 'string') throw new Error('missing standalone core sprite');
      if (typeof coreSolidSprite.coreSpriteSolid !== 'string') throw new Error('missing standalone solid core sprite');
      const html = renderToString(React.createElement(core.CoreAngleDown));
      if (!html.includes('<svg')) throw new Error('standalone CoreAngleDown should render an svg');
      if (html.includes('<use')) throw new Error('standalone CoreAngleDown should render inline svg content');
      const bruHtml = renderToString(React.createElement(bru.BruGithub));
      if (!bruHtml.includes('<svg')) throw new Error('standalone BruGithub should render an svg');
      if (bruHtml.includes('<use')) throw new Error('standalone BruGithub should render inline svg content');

      console.log('ok');
    `);

    expect(output).toBe('ok');
  }, IMPORT_TEST_TIMEOUT_MS);

  it('loads split Lan packages without aggregating every root entrypoint', () => {
    const output = runNodeImport(`
      const fs = await import('node:fs');
      const path = await import('node:path');
      const lanLight = await import('@zcorvus/lan-react-light');
      const lanRegular = await import('@zcorvus/lan-react-regular/lan-check-regular');
      const lanSolid = await import('@zcorvus/lan-react-solid/lan-check-solid');
      const lanThin = await import('@zcorvus/lan-react-thin/lan-check-thin');

      for (const packageDir of ['lan-react-light', 'lan-react-regular', 'lan-react-solid', 'lan-react-thin']) {
        const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'packages', packageDir, 'package.json'), 'utf8'));
        if (pkg.version !== '0.2.0') throw new Error(packageDir + ' should be version 0.2.0');
        if (pkg.dependencies?.['@zcorvus/icons']) throw new Error(packageDir + ' should be self-contained');
        if (pkg.dependencies?.['@zcorvus/icons-react']) throw new Error(packageDir + ' should not depend on icons-react');
      }

      if (typeof lanLight.LanCheck !== 'function') throw new Error('missing standalone LanCheck');
      if (typeof lanRegular.LanCheckRegular !== 'function') throw new Error('missing standalone LanCheckRegular');
      if (typeof lanSolid.LanCheckSolid !== 'function') throw new Error('missing standalone LanCheckSolid');
      if (typeof lanThin.LanCheckThin !== 'function') throw new Error('missing standalone LanCheckThin');

      console.log('ok');
    `);

    expect(output).toBe('ok');
  }, IMPORT_TEST_TIMEOUT_MS);

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
      const fs = await import('node:fs');
      const path = await import('node:path');
      const webPackage = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'packages/icons-web/package.json'), 'utf8'));

      if (webPackage.version !== '0.2.0') throw new Error('icons-web should be version 0.2.0');
      if (webPackage.dependencies?.['@zcorvus/icons']) throw new Error('icons-web should be self-contained');

      if (typeof root.createZIconElement !== 'function') throw new Error('missing createZIconElement root export');
      if (typeof create.defineZIconElement !== 'function') throw new Error('missing defineZIconElement');
      if (!registerCore.coreIcons?.sun) throw new Error('missing coreIcons web registry');
      if (!registerNeo.neoIcons?.sun) throw new Error('missing neoIcons web registry');
      if (!registerNeoRegularDuo.neoIconsRegularDuo?.sun) throw new Error('missing neo regular-duo web registry');
      if (!registerBru.bruIcons?.github) throw new Error('missing bruIcons web registry');
      if (typeof registerCoreSprite.coreSprite !== 'string') throw new Error('missing core sprite export');
      if (!('ZCoreSpriteElement' in registerCoreSprite)) throw new Error('missing core sprite element export');
      if (typeof registerBruSprite.bruSprite !== 'string') throw new Error('missing bru sprite export');
      if (!('ZBruSpriteElement' in registerBruSprite)) throw new Error('missing bru sprite element export');

      console.log('ok');
    `);

    expect(output).toBe('ok');
  }, IMPORT_TEST_TIMEOUT_MS);
});
