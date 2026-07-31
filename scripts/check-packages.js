import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';

const workspaceRoot = path.resolve(import.meta.dirname, '..');
const packagesRoot = path.join(workspaceRoot, 'packages');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const packageDirs = fs
  .readdirSync(packagesRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(packagesRoot, entry.name, 'package.json')))
  .map((entry) => path.join(packagesRoot, entry.name))
  .sort((left, right) => left.localeCompare(right));

for (const packageDir of packageDirs) {
  const result = spawnSync(npmCommand, ['pack', '--dry-run'], {
    cwd: packageDir,
    stdio: 'inherit',
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
