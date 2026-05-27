import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { optimize } from 'svgo';
import { svgoConfig } from './svgo.config.js';

const DEFAULTS = {
  sourceRoot: 'icons',
  outputRoot: path.join('metadata', 'icon-duplicates'),
};

const manualCanonicalNames = new Map([
  [createGroupKey(['add', 'plus']), 'plus'],
  [createGroupKey(['ad', 'rectangle-ad']), 'rectangle-ad'],
  [createGroupKey(['adjust', 'circle-half-stroke']), 'circle-half-stroke'],
]);

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

    if (arg === '--output' && next) {
      args.output = next;
      index += 1;
    }
  }

  return args;
}

function createGroupKey(names) {
  return [...names].sort((a, b) => a.localeCompare(b)).join('|');
}

function normalizeIconName(fileName) {
  return path.basename(fileName, '.svg').toLowerCase().replace(/[_\s]+/g, '-');
}

function countWords(name) {
  return name.split('-').filter(Boolean).length;
}

function chooseCanonicalName(names) {
  const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
  const manualName = manualCanonicalNames.get(createGroupKey(sortedNames));

  if (manualName && sortedNames.includes(manualName)) {
    return {
      canonical: manualName,
      confidence: 'manual',
      reason: 'manual-preferred-name',
    };
  }

  const canonical = [...sortedNames].sort((a, b) => {
    const wordDelta = countWords(b) - countWords(a);

    if (wordDelta !== 0) {
      return wordDelta;
    }

    const lengthDelta = a.length - b.length;

    if (lengthDelta !== 0) {
      return lengthDelta;
    }

    return a.localeCompare(b);
  })[0];

  return {
    canonical,
    confidence: 'automatic',
    reason: 'prefer-more-descriptive-name',
  };
}

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

function getOptimizedSvg(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const result = optimize(source, {
    path: filePath,
    ...svgoConfig,
  });

  if (result.error) {
    throw new Error(`Error optimizing ${filePath}: ${result.error}`);
  }

  return result.data.trim();
}

function createHash(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function findDuplicateIcons({ pack, variant, sourceRoot, output }) {
  if (!pack) {
    throw new Error('Missing required --pack value.');
  }

  if (!variant) {
    throw new Error('Missing required --variant value.');
  }

  const sourceDir = path.join(sourceRoot, pack, variant);
  const resolvedSourceDir = path.resolve(sourceDir);

  if (!fs.existsSync(resolvedSourceDir)) {
    throw new Error(`Source directory does not exist: ${sourceDir}`);
  }

  const files = fs
    .readdirSync(resolvedSourceDir)
    .filter((file) => file.endsWith('.svg'))
    .sort((a, b) => a.localeCompare(b));
  const hashGroups = new Map();

  for (const file of files) {
    const name = normalizeIconName(file);
    const filePath = path.join(resolvedSourceDir, file);
    const hash = createHash(getOptimizedSvg(filePath));

    if (!hashGroups.has(hash)) {
      hashGroups.set(hash, []);
    }

    hashGroups.get(hash).push({
      name,
      file: toPosixPath(path.relative(process.cwd(), filePath)),
    });
  }

  const groups = [...hashGroups.entries()]
    .filter(([, icons]) => icons.length > 1)
    .map(([hash, icons]) => {
      const allNames = icons.map((icon) => icon.name).sort((a, b) => a.localeCompare(b));
      const { canonical, confidence, reason } = chooseCanonicalName(allNames);
      const aliases = allNames.filter((name) => name !== canonical);
      const fileByName = new Map(icons.map((icon) => [icon.name, icon.file]));

      return {
        hash,
        canonical,
        aliases,
        allNames,
        confidence,
        reason,
        canonicalFile: fileByName.get(canonical),
        aliasFiles: aliases.map((name) => fileByName.get(name)),
      };
    })
    .sort((a, b) => a.canonical.localeCompare(b.canonical));

  const duplicateIcons = groups.reduce((sum, group) => sum + group.aliases.length, 0);
  const report = {
    pack,
    variant,
    sourceDir: toPosixPath(sourceDir),
    totalIcons: files.length,
    duplicateGroups: groups.length,
    duplicateIcons,
    groups,
  };
  const outputPath = output ?? path.join(DEFAULTS.outputRoot, `${pack}-${variant}.json`);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  return {
    outputPath,
    report,
  };
}

const args = parseArgs(process.argv.slice(2));
const { outputPath, report } = findDuplicateIcons(args);

console.log(`Duplicate icon report written to ${toPosixPath(outputPath)}`);
console.log(`Pack: ${report.pack} | Variant: ${report.variant}`);
console.log(`Total icons: ${report.totalIcons}`);
console.log(`Duplicate groups: ${report.duplicateGroups}`);
console.log(`Duplicate aliases: ${report.duplicateIcons}`);
