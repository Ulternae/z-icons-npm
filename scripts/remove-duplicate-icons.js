import fs from 'node:fs';
import path from 'node:path';

const DEFAULT_REPORT = path.join('metadata', 'icon-duplicates', 'lan-light.json');

function parseArgs(argv) {
  const args = {
    report: DEFAULT_REPORT,
    output: undefined,
    dryRun: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];

    if (arg === '--report' && next) {
      args.report = next;
      index += 1;
      continue;
    }

    if (arg === '--output' && next) {
      args.output = next;
      index += 1;
      continue;
    }

    if (arg === '--dry-run') {
      args.dryRun = true;
    }
  }

  return args;
}

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

function assertInsideDirectory(filePath, directoryPath) {
  const resolvedFile = path.resolve(filePath);
  const resolvedDirectory = path.resolve(directoryPath);
  const relativePath = path.relative(resolvedDirectory, resolvedFile);

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    throw new Error(`Refusing to remove file outside source directory: ${filePath}`);
  }
}

function readReport(reportPath) {
  if (!fs.existsSync(reportPath)) {
    throw new Error(`Duplicate report does not exist: ${reportPath}`);
  }

  return JSON.parse(fs.readFileSync(reportPath, 'utf8'));
}

function removeDuplicateIcons({ report: reportPath, output, dryRun }) {
  const report = readReport(reportPath);
  const sourceDir = report.sourceDir;

  if (!sourceDir) {
    throw new Error('Duplicate report is missing sourceDir.');
  }

  const resolvedSourceDir = path.resolve(sourceDir);

  if (!fs.existsSync(resolvedSourceDir)) {
    throw new Error(`Source directory does not exist: ${sourceDir}`);
  }

  const removed = [];
  const skipped = [];

  for (const group of report.groups ?? []) {
    for (const aliasFile of group.aliasFiles ?? []) {
      assertInsideDirectory(aliasFile, resolvedSourceDir);

      const resolvedAliasFile = path.resolve(aliasFile);
      const entry = {
        canonical: group.canonical,
        alias: path.basename(aliasFile, '.svg'),
        aliasFile: toPosixPath(aliasFile),
        canonicalFile: group.canonicalFile,
        hash: group.hash,
      };

      if (!fs.existsSync(resolvedAliasFile)) {
        skipped.push({
          ...entry,
          reason: 'missing-file',
        });
        continue;
      }

      if (!dryRun) {
        fs.unlinkSync(resolvedAliasFile);
      }

      removed.push(entry);
    }
  }

  const outputPath = output ?? reportPath.replace(/\.json$/, '.removed.json');
  const removalReport = {
    pack: report.pack,
    variant: report.variant,
    sourceDir: report.sourceDir,
    dryRun,
    removedCount: removed.length,
    skippedCount: skipped.length,
    removed,
    skipped,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(removalReport, null, 2)}\n`, 'utf8');

  return {
    outputPath,
    removalReport,
  };
}

const args = parseArgs(process.argv.slice(2));
const { outputPath, removalReport } = removeDuplicateIcons(args);

console.log(`Duplicate removal report written to ${toPosixPath(outputPath)}`);
console.log(`Pack: ${removalReport.pack} | Variant: ${removalReport.variant}`);
console.log(`Removed aliases: ${removalReport.removedCount}`);
console.log(`Skipped aliases: ${removalReport.skippedCount}`);
console.log(`Dry run: ${removalReport.dryRun ? 'yes' : 'no'}`);
