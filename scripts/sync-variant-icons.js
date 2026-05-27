import fs from 'node:fs';
import path from 'node:path';

const DEFAULTS = {
  sourceRoot: 'icons',
  outputRoot: path.join('metadata', 'icon-sync'),
  write: false,
};

function parseArgs(argv) {
  const args = { ...DEFAULTS };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];

    if (arg === '--pack' && next) {
      args.pack = next;
      index += 1;
      continue;
    }

    if (arg === '--reference' && next) {
      args.referenceVariant = next;
      index += 1;
      continue;
    }

    if (arg === '--variants' && next) {
      args.variants = next.split(',').map((variant) => variant.trim()).filter(Boolean);
      index += 1;
      continue;
    }

    if (arg === '--source-root' && next) {
      args.sourceRoot = next;
      index += 1;
      continue;
    }

    if (arg === '--output' && next) {
      args.output = next;
      index += 1;
      continue;
    }

    if (arg === '--write') {
      args.write = true;
    }
  }

  return args;
}

function normalizeIconName(fileName) {
  return path.basename(fileName, '.svg').toLowerCase().replace(/[_\s]+/g, '-');
}

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

function getSvgFiles(dir) {
  if (!fs.existsSync(dir)) {
    throw new Error(`Directory does not exist: ${toPosixPath(dir)}`);
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.svg'))
    .sort((a, b) => a.localeCompare(b));
}

function getVariantDirectories(packDir) {
  return fs
    .readdirSync(packDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function assertInsideDirectory(filePath, directoryPath) {
  const resolvedFile = path.resolve(filePath);
  const resolvedDirectory = path.resolve(directoryPath);
  const relativePath = path.relative(resolvedDirectory, resolvedFile);

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    throw new Error(`Refusing to remove file outside variant directory: ${toPosixPath(filePath)}`);
  }
}

function syncVariantIcons(options) {
  if (!options.pack) {
    throw new Error('Missing required --pack value.');
  }

  if (!options.referenceVariant) {
    throw new Error('Missing required --reference value.');
  }

  const packDir = path.join(options.sourceRoot, options.pack);
  const targetVariants = options.variants
    ?? getVariantDirectories(packDir).filter((variant) => variant !== options.referenceVariant);
  const referenceDir = path.join(packDir, options.referenceVariant);
  const referenceFiles = getSvgFiles(referenceDir);
  const referenceNames = new Set(referenceFiles.map(normalizeIconName));
  const variants = [];
  const removed = [];

  for (const variant of targetVariants) {
    if (variant === options.referenceVariant) {
      continue;
    }

    const variantDir = path.join(packDir, variant);

    if (!fs.existsSync(variantDir)) {
      variants.push({
        variant,
        totalIcons: 0,
        extraIcons: 0,
        removedIcons: 0,
        skipped: true,
        reason: 'missing-variant-directory',
        files: [],
      });
      continue;
    }

    const files = getSvgFiles(variantDir);
    const extraFiles = files
      .map((file) => ({
        name: normalizeIconName(file),
        file: toPosixPath(path.join(variantDir, file)),
      }))
      .filter((icon) => !referenceNames.has(icon.name));

    for (const icon of extraFiles) {
      const filePath = path.resolve(icon.file);

      assertInsideDirectory(filePath, variantDir);

      if (options.write) {
        fs.unlinkSync(filePath);
      }

      removed.push({
        variant,
        name: icon.name,
        file: icon.file,
      });
    }

    variants.push({
      variant,
      totalIcons: files.length,
      extraIcons: extraFiles.length,
      removedIcons: options.write ? extraFiles.length : 0,
      skipped: false,
      files: extraFiles,
    });
  }

  const outputPath = options.output
    ?? path.join(options.outputRoot, `${options.pack}-${options.referenceVariant}-reference.json`);
  const report = {
    pack: options.pack,
    referenceVariant: options.referenceVariant,
    targetVariants: targetVariants.filter((variant) => variant !== options.referenceVariant),
    sourceDir: toPosixPath(packDir),
    dryRun: !options.write,
    referenceIcons: referenceNames.size,
    extraIcons: variants.reduce((sum, variant) => sum + variant.extraIcons, 0),
    removedIcons: removed.length,
    variants,
    removed,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  return {
    outputPath,
    report,
  };
}

const args = parseArgs(process.argv.slice(2));
const { outputPath, report } = syncVariantIcons(args);

console.log(`Variant sync report written to ${toPosixPath(outputPath)}`);
console.log(`Pack: ${report.pack} | Reference: ${report.referenceVariant}`);
console.log(`Reference icons: ${report.referenceIcons}`);
console.log(`Extra icons found: ${report.extraIcons}`);
console.log(`Removed icons: ${report.removedIcons}`);
console.log(`Dry run: ${report.dryRun ? 'yes' : 'no'}`);
