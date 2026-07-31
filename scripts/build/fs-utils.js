import fs from 'fs';
import path from 'path';

export function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

export function cleanDir(dir) {
  const resolvedDir = path.resolve(dir);
  const resolvedCwd = process.cwd();

  if (resolvedDir === resolvedCwd || !isInsideDir(resolvedDir, resolvedCwd)) {
    throw new Error(`Refusing to clean unsafe path: ${resolvedDir}`);
  }

  fs.rmSync(resolvedDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  ensureDir(resolvedDir);
}

export function isInsideDir(target, dir) {
  const relative = path.relative(dir, target);

  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

function normalizeText(value) {
  return value.replace(/\r\n/g, '\n');
}

function listFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...listFiles(entryPath));
      continue;
    }

    if (entry.isFile()) {
      files.push(path.resolve(entryPath));
    }
  }

  return files;
}

function removeEmptyDirs(dir, root) {
  if (!fs.existsSync(dir)) {
    return;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      removeEmptyDirs(path.join(dir, entry.name), root);
    }
  }

  if (dir !== root && fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
  }
}

export function createOutputWriter(rootDir) {
  const root = path.resolve(rootDir);
  const resolvedCwd = process.cwd();

  if (root === resolvedCwd || !isInsideDir(root, resolvedCwd)) {
    throw new Error(`Refusing to track unsafe output path: ${root}`);
  }

  ensureDir(root);

  const files = new Set();
  const ensuredDirs = new Set([root]);
  const stats = {
    written: 0,
    unchanged: 0,
    removed: 0,
  };
  let finished = false;

  function ensureOutputDir(dir) {
    const resolvedDir = path.resolve(dir);

    if (ensuredDirs.has(resolvedDir)) {
      return;
    }

    ensureDir(resolvedDir);
    ensuredDirs.add(resolvedDir);
  }

  function writeFile(filePath, content) {
    if (finished) {
      throw new Error(`Cannot write after output tracking finished: ${filePath}`);
    }

    const resolvedFile = path.resolve(filePath);

    if (!isInsideDir(resolvedFile, root)) {
      throw new Error(`Refusing to write outside output root: ${resolvedFile}`);
    }

    files.add(resolvedFile);
    ensureOutputDir(path.dirname(resolvedFile));

    if (
      fs.existsSync(resolvedFile) &&
      normalizeText(fs.readFileSync(resolvedFile, 'utf8')) === normalizeText(content)
    ) {
      stats.unchanged += 1;
      return false;
    }

    fs.writeFileSync(resolvedFile, content, 'utf8');
    stats.written += 1;
    return true;
  }

  function finish() {
    if (finished) {
      return { ...stats };
    }

    for (const file of listFiles(root)) {
      if (!files.has(file)) {
        fs.rmSync(file, { force: true });
        stats.removed += 1;
      }
    }

    removeEmptyDirs(root, root);
    finished = true;
    return { ...stats };
  }

  return {
    root,
    writeFile,
    finish,
  };
}
