import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';

const workspaceRoot = path.resolve(import.meta.dirname, '..');
const packagesRoot = path.join(workspaceRoot, 'packages');
const packageDirs = ['icons', 'icons-react'].map((name) => path.join(packagesRoot, name));

for (const packageDir of packageDirs) {
  const verify = spawnSync(process.execPath, [path.join(workspaceRoot, 'scripts/verify-package-ready.js'), '.'], {
    cwd: packageDir,
    stdio: 'inherit',
  });
  if (verify.error) throw verify.error;
  if (verify.status !== 0) process.exit(verify.status ?? 1);

  const result = spawnSync('npm pack --dry-run --ignore-scripts --json', {
    cwd: packageDir,
    shell: true,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.stderr.write(result.stderr || result.stdout);
    process.exit(result.status ?? 1);
  }
  const [tarball] = JSON.parse(result.stdout);
  console.log(`[pack-check] ${tarball.name}@${tarball.version}: ${tarball.entryCount} files, ${tarball.size} compressed bytes, ${tarball.unpackedSize} unpacked bytes`);
}
