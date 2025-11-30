const fs = require("fs");
const path = require("path");

const sourceFile = path.join(__dirname, "../types/icon.d.ts");
const destFile = path.join(__dirname, "../dist/types/icon.d.ts");

const distDir = path.join(__dirname, "../dist");
const distTypesDir = path.join(__dirname, "../dist/types");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

if (!fs.existsSync(distTypesDir)) {
  fs.mkdirSync(distTypesDir, { recursive: true });
}

fs.copyFileSync(sourceFile, destFile);
console.log("✓ Types copied to dist");
