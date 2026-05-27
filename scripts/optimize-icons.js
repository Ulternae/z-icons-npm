import fs from 'node:fs';
import path from 'node:path';
import { optimize } from 'svgo';
import { svgoConfig } from './svgo.config.js';

const DEFAULTS = {
  sourceRoot: 'icons',
};

const ICON_STYLES = {
  core: { light: 'stroke' },
  neo: { light: 'stroke' },
  mina: { light: 'stroke', solid: 'fill' },
  bru: { solid: 'fill' },
  lan: { light: 'stroke' },
};

function parseArgs(argv) {
  const args = {
    ...DEFAULTS,
    pack: undefined,
    variant: undefined,
  };
  const positional = [];

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];

    if (arg === '--pack' && next) {
      args.pack = next;
      index += 1;
      continue;
    }

    if (arg === '--variant' && next) {
      args.variant = next;
      index += 1;
      continue;
    }

    if (arg === '--source-root' && next) {
      args.sourceRoot = next;
      index += 1;
      continue;
    }

    if (!arg.startsWith('--')) {
      positional.push(arg);
    }
  }

  args.pack ??= positional[0];
  args.variant ??= positional[1];

  return args;
}

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

function getVariantDirectories(packDir) {
  return fs
    .readdirSync(packDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function getIconStyle(pack, variant) {
  return ICON_STYLES[pack]?.[variant] ?? 'stroke';
}

function isFillIcon(pack, variant) {
  return getIconStyle(pack, variant) === 'fill';
}

function withSvgRootAttribute(svgContent, attribute, value) {
  return svgContent.replace(/<svg\b([^>]*)>/, (match, attrs) => {
    const attrRegex = new RegExp(`\\s${attribute}=["'][^"']*["']`);

    if (attrRegex.test(attrs)) {
      return match.replace(attrRegex, ` ${attribute}="${value}"`);
    }

    return `<svg${attrs} ${attribute}="${value}">`;
  });
}

function normalizeSvgForIconStyle(svgContent, pack, variant) {
  if (!isFillIcon(pack, variant)) {
    return svgContent;
  }

  return withSvgRootAttribute(svgContent, 'fill', 'currentColor');
}

function getSvgFiles(variantDir) {
  return fs
    .readdirSync(variantDir)
    .filter((file) => file.endsWith('.svg'))
    .sort((a, b) => a.localeCompare(b));
}

function optimizeSvgFile(filePath, pack, variant) {
  const source = fs.readFileSync(filePath, 'utf8');
  const result = optimize(source, {
    path: filePath,
    ...svgoConfig,
  });

  if (result.error) {
    throw new Error(`Error optimizing ${filePath}: ${result.error}`);
  }

  const optimizedSvg = normalizeSvgForIconStyle(result.data, pack, variant);

  if (optimizedSvg !== source) {
    fs.writeFileSync(filePath, optimizedSvg, 'utf8');
    return 'written';
  }

  return 'unchanged';
}

function optimizeVariant(pack, variant, variantDir) {
  const files = getSvgFiles(variantDir);
  const stats = {
    pack,
    variant,
    directory: toPosixPath(variantDir),
    total: files.length,
    written: 0,
    unchanged: 0,
  };

  for (const file of files) {
    const filePath = path.join(variantDir, file);
    const result = optimizeSvgFile(filePath, pack, variant);

    stats[result] += 1;
  }

  return stats;
}

function optimizeIcons({ pack, variant, sourceRoot }) {
  if (!pack) {
    throw new Error('Missing required pack. Usage: pnpm run optimize:icons -- <pack> [variant]');
  }

  const packDir = path.join(sourceRoot, pack);

  if (!fs.existsSync(packDir)) {
    throw new Error(`Pack directory does not exist: ${toPosixPath(packDir)}`);
  }

  const variants = variant ? [variant] : getVariantDirectories(packDir);
  const results = [];

  for (const currentVariant of variants) {
    const variantDir = path.join(packDir, currentVariant);

    if (!fs.existsSync(variantDir)) {
      throw new Error(`Variant directory does not exist: ${toPosixPath(variantDir)}`);
    }

    results.push(optimizeVariant(pack, currentVariant, variantDir));
  }

  return results;
}

const args = parseArgs(process.argv.slice(2));
const results = optimizeIcons(args);
const totals = results.reduce(
  (acc, result) => ({
    total: acc.total + result.total,
    written: acc.written + result.written,
    unchanged: acc.unchanged + result.unchanged,
  }),
  { total: 0, written: 0, unchanged: 0 }
);

console.log('\nIcon optimization completed.\n');

for (const result of results) {
  console.log(
    `${result.pack}/${result.variant} | ${result.total} SVGs | ${result.written} written | ${result.unchanged} unchanged`
  );
}

console.log(`\nTotal: ${totals.total} SVGs | ${totals.written} written | ${totals.unchanged} unchanged\n`);
