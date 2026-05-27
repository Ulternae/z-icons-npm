import fs from 'fs';
import path from 'path';

let activeOutput = undefined;

export function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

export function cleanDir(dir) {
  const resolvedDir = path.resolve(dir);
  const resolvedCwd = process.cwd();

  if (resolvedDir === resolvedCwd || !resolvedDir.startsWith(resolvedCwd)) {
    throw new Error(`Refusing to clean unsafe path: ${resolvedDir}`);
  }

  fs.rmSync(resolvedDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  ensureDir(resolvedDir);
}

export function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));

  const resolvedFile = path.resolve(filePath);

  if (activeOutput && isInsideDir(resolvedFile, activeOutput.root)) {
    activeOutput.files.add(resolvedFile);
  }

  if (fs.existsSync(resolvedFile) && fs.readFileSync(resolvedFile, 'utf8') === content) {
    return;
  }

  fs.writeFileSync(resolvedFile, content, 'utf8');
}

export function startOutputTracking(rootDir) {
  const root = path.resolve(rootDir);
  const resolvedCwd = process.cwd();

  if (root === resolvedCwd || !isInsideDir(root, resolvedCwd)) {
    throw new Error(`Refusing to track unsafe output path: ${root}`);
  }

  ensureDir(root);
  activeOutput = {
    root,
    files: new Set(),
  };
}

export function finishOutputTracking() {
  if (!activeOutput) {
    return;
  }

  const { root, files } = activeOutput;
  const existingFiles = listFiles(root);

  for (const file of existingFiles) {
    if (!files.has(file)) {
      fs.rmSync(file, { force: true });
    }
  }

  removeEmptyDirs(root);
  activeOutput = undefined;
}

function isInsideDir(target, dir) {
  const relative = path.relative(dir, target);

  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
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

function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      removeEmptyDirs(path.join(dir, entry.name));
    }
  }

  if (dir !== activeOutput?.root && fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
  }
}
