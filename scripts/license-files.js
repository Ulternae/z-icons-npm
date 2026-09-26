import fs from 'node:fs';
import path from 'node:path';

const workspaceRoot = path.resolve(import.meta.dirname, '..');
const packagesRoot = path.join(workspaceRoot, 'packages');
const licenseSource = path.join(workspaceRoot, 'LICENSE');
const thirdPartyLicenseSource = path.join(workspaceRoot, 'THIRD_PARTY_LICENSES.md');

export const MYNA_UI_PACKAGE_NAMES = new Set([
  '@zcorvus/icons',
  '@zcorvus/icons-react',
]);

export function packageIncludesMynaIcons(packageName) {
  return MYNA_UI_PACKAGE_NAMES.has(packageName);
}

export function getCanonicalLicenseText() {
  return fs.readFileSync(licenseSource, 'utf8');
}

export function getCanonicalThirdPartyLicenseText() {
  return fs.readFileSync(thirdPartyLicenseSource, 'utf8');
}

function isInsideDirectory(target, directory) {
  const relative = path.relative(directory, target);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

function writeFileIfChanged(filePath, content) {
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n') === content.replace(/\r\n/g, '\n')) {
    return false;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

export function syncPackageLicenseFiles(packageDir) {
  const resolvedPackageDir = path.resolve(packageDir);

  if (!isInsideDirectory(resolvedPackageDir, packagesRoot) || resolvedPackageDir === packagesRoot) {
    throw new Error(`Refusing to write license files outside packages/: ${resolvedPackageDir}`);
  }

  const packageJsonPath = path.join(resolvedPackageDir, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const written = [];

  if (writeFileIfChanged(path.join(resolvedPackageDir, 'LICENSE'), getCanonicalLicenseText())) {
    written.push('LICENSE');
  }

  if (
    packageIncludesMynaIcons(packageJson.name) &&
    writeFileIfChanged(
      path.join(resolvedPackageDir, 'THIRD_PARTY_LICENSES.md'),
      getCanonicalThirdPartyLicenseText()
    )
  ) {
    written.push('THIRD_PARTY_LICENSES.md');
  }

  return { packageName: packageJson.name, written };
}

export function syncAllPackageLicenseFiles() {
  return ['icons', 'icons-react'].map((name) => syncPackageLicenseFiles(path.join(packagesRoot, name)));
}
