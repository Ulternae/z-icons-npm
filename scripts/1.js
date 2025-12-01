const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

// Configuration
const CONFIG = {
  srcDir: 'src',
  distDir: 'dist',
  packs: ['core', 'neo'], // Folder names in src/ and dist/
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      'removeDimensions',
      {
        name: 'convertColors',
        params: {
          currentColor: true,
        },
      },
      {
        name: 'removeAttrs',
        params: {
          attrs: '(stroke|fill)',
        },
      },
    ],
  },
};

/**
 * Ensure directory exists
 */
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Process a single icon pack
 */
function processPack(packName) {
  console.log(`\n📦 Processing pack: ${packName}`);

  const srcPath = path.join(CONFIG.srcDir, packName, 'icons');
  const distPath = path.join(CONFIG.distDir, packName);

  if (!fs.existsSync(srcPath)) {
    console.warn(`   ⚠️  Source directory not found: ${srcPath}`);
    return;
  }

  ensureDir(distPath);

  const files = fs.readdirSync(srcPath).filter(f => f.endsWith('.svg'));
  const symbols = [];
  const iconIds = [];

  console.log(`   Found ${files.length} icons`);

  files.forEach(file => {
    const filePath = path.join(srcPath, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const id = path.basename(file, '.svg').toLowerCase().replace(/[_\s]+/g, '-');

    // Optimize SVG
    const result = optimize(content, {
      path: filePath,
      ...CONFIG.svgoConfig,
    });

    if (result.error) {
      console.error(`   ❌ Error optimizing ${file}:`, result.error);
      return;
    }

    // Extract content for symbol
    const svgContent = result.data;
    const viewBoxMatch = svgContent.match(/viewBox=["']([^"']+)["']/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

    // Remove svg tags to get inner content
    const innerContent = svgContent
      .replace(/<svg[^>]*>/, '')
      .replace(/<\/svg>/, '');

    symbols.push(`<symbol id="${id}" viewBox="${viewBox}">${innerContent}</symbol>`);
    iconIds.push(id);
  });

  // Generate Sprite
  const spriteContent = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n${symbols.join('\n')}\n</svg>`;
  fs.writeFileSync(path.join(distPath, `${packName}-sprite.svg`), spriteContent);
  console.log(`   ✅ Generated sprite: ${distPath}/${packName}-sprite.svg`);

  // Generate Type Definitions
  const typeContent = `export type ${capitalize(packName)}IconName = \n${iconIds.map(id => `  | '${id}'`).join('\n')};\n\nexport const ${packName}Icons = [\n${iconIds.map(id => `  '${id}'`).join(',\n')}\n] as const;`;
  fs.writeFileSync(path.join(distPath, 'index.d.ts'), typeContent);

  // Generate JS Utils (optional, but good for runtime checks)
  const jsContent = `export const ${packName}Icons = ${JSON.stringify(iconIds)};`;
  fs.writeFileSync(path.join(distPath, 'index.js'), jsContent);

  console.log(`   ✅ Generated types and indices`);
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function main() {
  console.log('🚀 Starting build process...');

  // Clean dist? Maybe not, to preserve other files if any.
  // ensureDir(CONFIG.distDir);

  CONFIG.packs.forEach(pack => processPack(pack));

  console.log('\n✨ Build completed!');
}

main();
