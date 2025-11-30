const fs = require("fs");
const path = require("path");

const sourceFile = path.join(__dirname, "../src/Icon.js");
const destFile = path.join(__dirname, "../dist/Icon.js");

const distDir = path.join(__dirname, "../dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.copyFileSync(sourceFile, destFile);
console.log("✓ Icon.js copied to dist");
