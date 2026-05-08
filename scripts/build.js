import fs from 'fs'
import path from 'path'
import { optimize } from 'svgo'
import { svgoConfig } from './svgo.config.js'

const CONFIG = {
  srcDir: 'src',
  distDir: 'dist',
  packs: ['core', 'neo', "mina"],
  variants: ['light', 'solid', 'regular', 'thin'],
  svgoConfig: svgoConfig,
}

//Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function cleanDist() {
  const resolvedDist = path.resolve(CONFIG.distDir);
  const resolvedCwd = process.cwd();

  if (resolvedDist === resolvedCwd || !resolvedDist.startsWith(resolvedCwd)) {
    throw new Error(`Refusing to clean unsafe dist path: ${resolvedDist}`);
  }

  fs.rmSync(resolvedDist, { recursive: true, force: true });
  ensureDir(resolvedDist);
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

//Convert kebab-case to PascalCase (handles numbers)
//Examples: flower-2 -> Flower2, clock-ten -> ClockTen

function toPascalCase(str) {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

//Convert SVG string to React.createElement calls
function svgToReactElement(svgContent, iconId) {
  // Extract viewBox
  const viewBoxMatch = svgContent.match(/viewBox=["']([^"']+)["']/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Extract inner content (paths, circles, etc.)
  const innerMatch = svgContent.match(/<svg[^>]*>(.*?)<\/svg>/s);
  const innerContent = innerMatch ? innerMatch[1] : '';

  // Parse inner elements to React.createElement calls
  const elements = [];
  const elementRegex = /<(\w+)([^>]*)\/>/g;
  let match;

  while ((match = elementRegex.exec(innerContent)) !== null) {
    const tagName = match[1];
    const attrs = match[2];

    // Parse attributes
    const attrObj = {};
    const attrRegex = /(\w+(?:-\w+)*)=["']([^"']*)["']/g;
    let attrMatch;

    while ((attrMatch = attrRegex.exec(attrs)) !== null) {
      let key = attrMatch[1];
      const value = attrMatch[2];

      // Convert kebab-case to camelCase for React
      if (key.includes('-')) {
        key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      }

      attrObj[key] = value;
    }

    elements.push({ tagName, attrs: attrObj });
  }

  // Generate React.createElement code
  const elementsCode = elements.map(el => {
    const attrsStr = JSON.stringify(el.attrs);
    return `React.createElement('${el.tagName}', ${attrsStr})`;
  }).join(',\n    ');

  return `export const ${toPascalCase(iconId)} = (props) => React.createElement('svg', { viewBox: '${viewBox}', fill: 'none', ...props }, ${elementsCode});`;
}

/**
 * Process a single icon pack with variant support
 */
function processPack(packName) {
  const srcPath = path.join(CONFIG.srcDir, packName, 'icons');
  const distPath = path.join(CONFIG.distDir, packName);

  // Output path for generated source files (dictionaries)
  const srcGenPath = path.join(CONFIG.srcDir, packName);

  if (!fs.existsSync(srcPath)) {
    console.warn(`   ⚠️  Source directory not found: ${srcPath}`);
    return;
  }

  ensureDir(distPath);
  ensureDir(srcGenPath);

  const variantData = {};
  const allIconIds = new Set();
  let totalIconCount = 0;

  CONFIG.variants.forEach(variant => {
    const variantPath = path.join(srcPath, variant);

    if (!fs.existsSync(variantPath)) {
      // Variant doesn't exist, skip it
      return;
    }

    const files = fs.readdirSync(variantPath).filter((file) => file.endsWith('.svg'));
    if (files.length === 0) return;

    const svgStrings = {};
    const reactComponents = [];

    files.forEach((file) => {
      const filePath = path.join(variantPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const id = path.basename(file, '.svg').toLowerCase().replace(/[_\s]+/g, '-');

      const result = optimize(content, {
        path: filePath,
        ...CONFIG.svgoConfig,
      });

      if (result.error) {
        console.error(`   ❌ Error optimizing ${file}:`, result.error);
        return;
      }

      fs.writeFileSync(filePath, result.data, 'utf8');
      const svgContent = result.data;

      allIconIds.add(id);
      svgStrings[id] = svgContent;

      // Generate React component
      const reactComponent = svgToReactElement(svgContent, id);
      reactComponents.push(reactComponent);

      // Write individual string export to dist (for direct usage if needed)
      const individualStringContent = `export const ${toPascalCase(id)} = '${svgContent.replace(/'/g, "\\'")}'`;
      const variantDistPath = path.join(distPath, variant);
      ensureDir(variantDistPath);
      fs.writeFileSync(path.join(variantDistPath, `${id}.js`), individualStringContent);
    });

    variantData[variant] = {
      svgStrings,
      reactComponents,
      iconIds: Object.keys(svgStrings)
    };

    totalIconCount += files.length;
  });

  // 1. Generate string dictionary (for Web Components) in src/ with variant structure
  const stringDictContent = `export const ${packName}Icons = ${JSON.stringify(
    Object.fromEntries(
      Object.entries(variantData).map(([variant, data]) => [variant, data.svgStrings])
    ),
    null,
    2
  )};\n\nexport const ${packName}IconNames = [\n${Array.from(allIconIds).map(id => `  '${id}'`).join(',\n')}\n];`;
  fs.writeFileSync(path.join(srcGenPath, 'icons.js'), stringDictContent);

  const stringDictTypes = `export declare const ${packName}Icons: Record<string, Record<string, string>>;\nexport declare const ${packName}IconNames: string[];`;
  fs.writeFileSync(path.join(srcGenPath, 'icons.d.ts'), stringDictTypes);

  // 2. Generate React component dictionary in src/ with named exports and variant structure
  const allReactExports = [];
  const variantReactObjects = {};

  Object.entries(variantData).forEach(([variant, data]) => {
    const { svgStrings, iconIds } = data;

    iconIds.forEach(id => {
      const componentNameCap = toPascalCase(id);
      const variantSuffix = capitalize(variant);
      const componentName = `${componentNameCap}${variantSuffix}`;
      const svgContent = svgStrings[id];
      const viewBoxMatch = svgContent.match(/viewBox=["']([^"']+)["']/);
      const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

      // Extract paths and other elements
      const innerMatch = svgContent.match(/<svg[^>]*>(.*?)<\/svg>/s);
      const innerContent = innerMatch ? innerMatch[1].trim() : '';

      // Simple approach: convert inner SVG to React elements
      const elements = [];
      const elementRegex = /<(\w+)([^>]*)\/>/g;
      let match;

      while ((match = elementRegex.exec(innerContent)) !== null) {
        const tagName = match[1];
        const attrs = match[2].trim();
        elements.push({ tagName, attrs });
      }

      const elementsCode = elements.map(el => {
        const attrsObj = {};
        const attrRegex = /(\w+(?:-\w+)*)=["']([^"']*)["']/g;
        let attrMatch;

        while ((attrMatch = attrRegex.exec(el.attrs)) !== null) {
          let key = attrMatch[1];
          const value = attrMatch[2];

          // Convert to camelCase
          if (key.includes('-')) {
            key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          }

          attrsObj[key] = value;
        }

        return `React.createElement('${el.tagName}', ${JSON.stringify(attrsObj)})`;
      }).join(', ');

      allReactExports.push(`export const ${componentName} = (props) => React.createElement('svg', { viewBox: '${viewBox}', fill: 'none', ...props }, ${elementsCode});`);

      if (!variantReactObjects[variant]) {
        variantReactObjects[variant] = [];
      }
      variantReactObjects[variant].push({ id, componentName });
    });
  });

  const reactDictContent = `import React from 'react';\n\n${allReactExports.join('\n\n')}\n\nexport const ${capitalize(packName)}Icons = {\n${Object.entries(variantReactObjects).map(([variant, icons]) => {
    return `  ${variant}: {\n${icons.map(({ id, componentName }) => `    '${id}': ${componentName}`).join(',\n')}\n  }`;
  }).join(',\n')}\n};`;

  fs.writeFileSync(path.join(srcGenPath, 'react.js'), reactDictContent);

  const reactDictTypes = `import React from 'react';\n\n${allReactExports.map(exp => {
    const match = exp.match(/export const (\w+)/);
    if (match) {
      return `export declare const ${match[1]}: React.FC<React.SVGProps<SVGSVGElement>>;`;
    }
    return '';
  }).join('\n')}\n\nexport declare const ${capitalize(packName)}Icons: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;`;
  fs.writeFileSync(path.join(srcGenPath, 'react.d.ts'), reactDictTypes);

  Object.entries(variantReactObjects).forEach(([variant, icons]) => {
    const variantSuffix = capitalize(variant);
    const variantExports = allReactExports.filter((exp) => {
      const match = exp.match(/export const (\w+)/);
      return match ? icons.some(({ componentName }) => componentName === match[1]) : false;
    });

    const variantReactContent = `import React from 'react';\n\n${variantExports.join('\n\n')}\n\nexport const ${capitalize(packName)}${variantSuffix}Icons = {\n${icons.map(({ id, componentName }) => `  '${id}': ${componentName}`).join(',\n')}\n};`;
    fs.writeFileSync(path.join(srcGenPath, `react-${variant}.js`), variantReactContent);

    const variantReactTypes = `import React from 'react';\n\n${icons.map(({ componentName }) => `export declare const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>>;`).join('\n')}\n\nexport declare const ${capitalize(packName)}${variantSuffix}Icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;`;
    fs.writeFileSync(path.join(srcGenPath, `react-${variant}.d.ts`), variantReactTypes);
  });

  // 3. Generate types for icon names
  const srcTypesPath = path.join(CONFIG.srcDir, packName);
  ensureDir(srcTypesPath);
  const srcTypeContent = `// Auto-generated types - DO NOT EDIT MANUALLY\n// This file is generated by scripts/build.js\n\nexport type ${capitalize(packName)}IconName = \n${Array.from(allIconIds).map(id => `  | '${id}'`).join('\n')};\n`;
  fs.writeFileSync(path.join(srcTypesPath, 'types.ts'), srcTypeContent);

  const packIndexContent = `export { ${packName}IconNames, ${packName}Icons } from './icons';\nexport type { ${capitalize(packName)}IconName } from './types';\n`;
  fs.writeFileSync(path.join(srcGenPath, 'index.ts'), packIndexContent);

  console.log(`   ✅ Pack processed: | ${capitalize(packName).padStart(5, " ")}  |  ${totalIconCount} icons across ${Object.keys(variantData).length} variant(s)`);
}

function types() {
  const iconsIndexContent = `// Auto-generated file - Central export point for all icons
// Re-export all icon dictionaries and names from all packs
export { coreIcons, coreIconNames } from '../core/icons.js';
export { neoIcons, neoIconNames } from '../neo/icons.js';
export { minaIcons, minaIconNames } from '../mina/icons.js';

// Export types
export type { CoreIconName } from '../core/types';
export type { NeoIconName } from '../neo/types';
export type { MinaIconName } from '../mina/types';

// Import types to use them locally
import type { CoreIconName } from '../core/types';
import type { NeoIconName } from '../neo/types';
import type { MinaIconName } from '../mina/types';

// Combined icon pack type
export type AllIconNames = CoreIconName | NeoIconName | MinaIconName;
export type IconPack = 'core' | 'neo' | 'mina';
export type IconVariant = 'light' | 'solid' | 'regular' | 'thin';
`;

  const iconsDir = path.join(CONFIG.srcDir, 'icons');
  ensureDir(iconsDir);
  fs.writeFileSync(path.join(iconsDir, 'index.ts'), iconsIndexContent, 'utf8');

  console.log('   ✅ General types');
  console.log('   ✅ Central icons index');
}

function main() {
  console.log('\n🚀 Starting build process... \n');
  cleanDist();
  CONFIG.packs.forEach(pack => processPack(pack));
  types();
  console.log('\n🎉 Build process completed.\n');
}

main();
