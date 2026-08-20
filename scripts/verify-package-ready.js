import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {
  getCanonicalLicenseText,
  getCanonicalThirdPartyLicenseText,
  packageIncludesMynaIcons,
} from './license-files.js';

const workspaceRoot = path.resolve(import.meta.dirname, '..');
const packagesRoot = path.join(workspaceRoot, 'packages');
const packageDir = path.resolve(process.argv[2] ?? process.cwd());

function isInsideDirectory(target, directory) {
  const relative = path.relative(directory, target);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

function fail(message) {
  console.error(`[package-check] ${message}`);
  process.exitCode = 1;
}

function collectExportTargets(value, targets = []) {
  if (typeof value === 'string') {
    targets.push(value);
    return targets;
  }

  if (value && typeof value === 'object') {
    for (const nested of Object.values(value)) {
      collectExportTargets(nested, targets);
    }
  }

  return targets;
}

if (!isInsideDirectory(packageDir, packagesRoot) || packageDir === packagesRoot) {
  throw new Error(`Refusing to inspect a directory outside packages/: ${packageDir}`);
}

const packageJsonPath = path.join(packageDir, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

if (packageJson.private === true) {
  fail(`${packageJson.name} is private and cannot be packed as a public package.`);
}

if (!packageJson.files?.includes('dist')) {
  fail(`${packageJson.name} must include dist in package.json#files.`);
}

if (!fs.existsSync(path.join(packageDir, 'dist'))) {
  fail(`${packageJson.name} has no dist directory. Run the corresponding build first.`);
}

if (!fs.existsSync(path.join(packageDir, 'README.md'))) {
  fail(`${packageJson.name} has no README.md.`);
}

for (const target of collectExportTargets(packageJson.exports)) {
  if (target.includes('*')) {
    continue;
  }

  const resolvedTarget = path.resolve(packageDir, target);

  if (!isInsideDirectory(resolvedTarget, packageDir) || !fs.existsSync(resolvedTarget)) {
    fail(`${packageJson.name} export target does not exist: ${target}`);
  }
}

for (const [name, range] of Object.entries(packageJson.dependencies ?? {})) {
  if (String(range).startsWith('workspace:')) {
    fail(`${packageJson.name} contains an unpublished workspace range for ${name}: ${range}`);
  }
}

if (packageJson.license !== 'MIT') {
  fail(`${packageJson.name} must declare the MIT license.`);
}

const packageLicensePath = path.join(packageDir, 'LICENSE');

if (!packageJson.files?.includes('LICENSE') || !fs.existsSync(packageLicensePath)) {
  fail(`${packageJson.name} must publish its LICENSE file.`);
} else if (fs.readFileSync(packageLicensePath, 'utf8') !== getCanonicalLicenseText()) {
  fail(`${packageJson.name} has a stale LICENSE file. Run pnpm run licenses:sync.`);
}

if (packageIncludesMynaIcons(packageJson.name)) {
  const thirdPartyLicensesPath = path.join(packageDir, 'THIRD_PARTY_LICENSES.md');

  if (!packageJson.files?.includes('THIRD_PARTY_LICENSES.md') || !fs.existsSync(thirdPartyLicensesPath)) {
    fail(`${packageJson.name} must publish the Myna UI attribution in THIRD_PARTY_LICENSES.md.`);
  } else if (fs.readFileSync(thirdPartyLicensesPath, 'utf8') !== getCanonicalThirdPartyLicenseText()) {
    fail(`${packageJson.name} has stale third-party notices. Run pnpm run licenses:sync.`);
  }
}

if (process.exitCode !== 1) {
  console.log(`[package-check] ${packageJson.name}@${packageJson.version} is ready to pack.`);
}
