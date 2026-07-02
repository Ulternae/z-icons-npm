import { iconConfig as CONFIG } from './icon-config.js';
import { buildIconsPackage } from './build/build-icons-package.js';
import { buildCoreReactPackages } from './build/build-core-react-packages.js';
import { buildReactPackage } from './build/build-react-package.js';
import { buildWebPackage } from './build/build-web-package.js';
import { collectIcons } from './build/collect-icons.js';

const TARGETS = {
  all: ['icons', 'react', 'web', 'core-react'],
  icons: ['icons'],
  react: ['icons', 'react'],
  web: ['icons', 'web'],
  'core-react': ['core-react'],
};

function parseArgs(argv) {
  const args = {
    target: 'all',
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];

    if (arg === '--target' && next) {
      args.target = next;
      index += 1;
      continue;
    }

    if (arg.startsWith('--target=')) {
      args.target = arg.slice('--target='.length);
    }
  }

  return args;
}

function resolveTargets(target) {
  const targets = TARGETS[target];

  if (!targets) {
    throw new Error(`Unknown build target "${target}". Expected one of: ${Object.keys(TARGETS).join(', ')}`);
  }

  return targets;
}

function buildTarget(target, icons, packData) {
  if (target === 'icons') {
    buildIconsPackage(icons, packData);
    return;
  }

  if (target === 'react') {
    buildReactPackage(icons, packData);
    return;
  }

  if (target === 'core-react') {
    buildCoreReactPackages(packData);
    return;
  }

  if (target === 'web') {
    buildWebPackage(icons, packData);
    return;
  }

  throw new Error(`Unhandled build target "${target}".`);
}

function printPackSummary(packData) {
  for (const pack of CONFIG.packs) {
    const total = Object.values(packData[pack] ?? {}).reduce((sum, variantIcons) => sum + variantIcons.length, 0);
    const variants = Object.keys(packData[pack] ?? {}).length;
    console.log(`Pack processed: ${pack} | ${total} icons across ${variants} variant(s)`);
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const targets = resolveTargets(args.target);

  console.log(`\nStarting ZCorvus icons build: ${targets.join(', ')}\n`);

  const collectOptions = args.target === 'core-react' ? { packs: ['core'] } : undefined;
  const { icons, packData } = collectIcons(collectOptions);

  for (const target of targets) {
    buildTarget(target, icons, packData);
  }

  printPackSummary(packData);
  console.log('\nBuild completed.\n');
}

main();
