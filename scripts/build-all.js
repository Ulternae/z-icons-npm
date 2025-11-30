const { execSync } = require("child_process");

const scripts = [
  "node scripts/optimize-svg.js",
  "node scripts/build-sprites.js",
  "node scripts/generate-types.js",
  "node scripts/copy-sprites.js",
  "node scripts/copy-type.js",
];

console.log("🚀 Starting build process...\n");

scripts.forEach((script, index) => {
  try {
    console.log(`[${index + 1}/${scripts.length}] Running: ${script}`);
    execSync(script, { stdio: "inherit" });
    console.log("");
  } catch (error) {
    console.error(`❌ Error running: ${script}`);
    process.exit(1);
  }
});

console.log("✅ All scripts completed successfully!");
