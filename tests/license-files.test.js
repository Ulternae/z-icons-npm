import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { packageIncludesMynaIcons } from '../scripts/license-files.js';

const workspaceRoot = path.resolve(import.meta.dirname, '..');
const packagesRoot = path.join(workspaceRoot, 'packages');
const rootLicense = fs.readFileSync(path.join(workspaceRoot, 'LICENSE'), 'utf8');
const thirdPartyLicenses = fs.readFileSync(path.join(workspaceRoot, 'THIRD_PARTY_LICENSES.md'), 'utf8');
const packageDirs = fs
  .readdirSync(packagesRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(packagesRoot, entry.name, 'package.json')))
  .map((entry) => path.join(packagesRoot, entry.name));

describe('package licenses', () => {
  it('publishes every package under MIT with the canonical license text', () => {
    for (const packageDir of packageDirs) {
      const packageJson = JSON.parse(fs.readFileSync(path.join(packageDir, 'package.json'), 'utf8'));

      expect(packageJson.license, packageJson.name).toBe('MIT');
      expect(packageJson.files, packageJson.name).toContain('LICENSE');
      expect(fs.readFileSync(path.join(packageDir, 'LICENSE'), 'utf8'), packageJson.name).toBe(rootLicense);
    }
  });

  it('includes the Myna UI attribution in every package that distributes Mina icons', () => {
    for (const packageDir of packageDirs) {
      const packageJson = JSON.parse(fs.readFileSync(path.join(packageDir, 'package.json'), 'utf8'));

      if (!packageIncludesMynaIcons(packageJson.name)) {
        continue;
      }

      expect(packageJson.files, packageJson.name).toContain('THIRD_PARTY_LICENSES.md');
      expect(fs.readFileSync(path.join(packageDir, 'THIRD_PARTY_LICENSES.md'), 'utf8'), packageJson.name).toBe(
        thirdPartyLicenses
      );
    }
  });
});
