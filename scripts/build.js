import { iconConfig as CONFIG } from './icon-config.js';
import { buildStandaloneReactPackages } from './build/build-core-react-packages.js';
import { buildReactPackage } from './build/build-react-package.js';
import { buildWebPackage } from './build/build-web-package.js';
import { collectIcons } from './build/collect-icons.js';

const TARGETS = {
  all: ['react', 'web', 'standalone-react'],
  react: ['react'],
  web: ['web'],
  'pack-react': ['standalone-react'],
  'standalone-react': ['standalone-react'],
};

function parseArgs(argv) {
  const args = {
    target: 'all',
    pack: undefined,
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
      continue;
    }

    if (arg === '--pack' && next) {
      args.pack = next;
      index += 1;
      continue;
    }

    if (arg.startsWith('--pack=')) {
      args.pack = arg.slice('--pack='.length);
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
  if (target === 'react') {
    return buildReactPackage(icons, packData);
  }

  if (target === 'standalone-react') {
    return buildStandaloneReactPackages(packData);
  }

  if (target === 'web') {
    return buildWebPackage(icons, packData);
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

function printBuildStats(target, result) {
  const entries = Array.isArray(result) ? result : [{ target, ...result }];

  for (const entry of entries) {
    const label = entry.packageName ?? entry.target;
    console.log(
      `Output ${label}: ${entry.written} written, ${entry.unchanged} unchanged, ${entry.removed} removed`
    );
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const effectiveTarget = args.pack && args.target === 'react' ? 'pack-react' : args.target;
  const targets = resolveTargets(effectiveTarget);

  if (args.pack && !CONFIG.packs.includes(args.pack)) {
    throw new Error(`Unknown icon pack "${args.pack}". Expected one of: ${CONFIG.packs.join(', ')}`);
  }

  if (args.pack && !['react', 'pack-react', 'standalone-react'].includes(args.target)) {
    throw new Error('--pack can only be used with a React package target.');
  }

  console.log(`\nStarting ZCorvus icons build: ${targets.join(', ')}\n`);

  const collectOptions = args.pack ? { packs: [args.pack] } : undefined;
  const { icons, packData } = collectIcons(collectOptions);

  for (const target of targets) {
    printBuildStats(target, buildTarget(target, icons, packData));
  }

  printPackSummary(packData);
  console.log('\nBuild completed.\n');
}

main();
