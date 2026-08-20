import { syncAllPackageLicenseFiles } from './license-files.js';

for (const { packageName, written } of syncAllPackageLicenseFiles()) {
  const status = written.length > 0 ? `updated ${written.join(', ')}` : 'already up to date';
  console.log(`${packageName}: ${status}`);
}
