import fs from 'fs'
import path from 'path'
import { optimize } from 'svgo'
import { svgoConfig } from './svgo.config.js'

const CONFIG = {
  srcDir: 'src',
  distDir: 'dist',
  packs: ['core', 'neo'],
  svgoConfig: svgoConfig,
}

/**
 * Ensure directory exists
 */
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Convert SVG string to React.createElement calls
 */
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

  return `export const ${capitalize(iconId).replace(/-([a-z])/g, (g) => g[1].toUpperCase())} = (props) => React.createElement('svg', { viewBox: '${viewBox}', fill: 'none', ...props }, ${elementsCode});`;
}

/**
 * Process a single icon pack
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

  const files = fs.readdirSync(srcPath).filter((file) => file.endsWith('.svg'));
  const iconIds = [];
  const svgStrings = {};
  const reactComponents = [];

  files.forEach((file) => {
    const filePath = path.join(srcPath, file)
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

    iconIds.push(id);
    svgStrings[id] = svgContent;

    // Generate React component
    const reactComponent = svgToReactElement(svgContent, id);
    reactComponents.push(reactComponent);

    // Write individual string export to dist (for direct usage if needed)
    const individualStringContent = `export const ${id.replace(/-([a-z])/g, (g) => g[1].toUpperCase())} = '${svgContent.replace(/'/g, "\\'")}';`;
    fs.writeFileSync(path.join(distPath, `${id}.js`), individualStringContent);
    fs.writeFileSync(path.join(distPath, `${id}.d.ts`), `export declare const ${id.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}: string;`);
  })

  // 1. Generate string dictionary (for Web Components) in src/
  const stringDictContent = `export const ${packName}Icons = ${JSON.stringify(svgStrings, null, 2)};`;
  fs.writeFileSync(path.join(srcGenPath, 'icons.js'), stringDictContent);

  const stringDictTypes = `export declare const ${packName}Icons: Record<string, string>;`;
  fs.writeFileSync(path.join(srcGenPath, 'icons.d.ts'), stringDictTypes);

  // 2. Generate React component dictionary in src/ with named exports
  const reactDictContent = `import React from 'react';\n\n${iconIds.map(id => {
    const componentName = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const componentNameCap = componentName.charAt(0).toUpperCase() + componentName.slice(1);
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

    return `export const ${componentNameCap} = (props) => React.createElement('svg', { viewBox: '${viewBox}', fill: 'none', ...props }, ${elementsCode});`;
  }).join('\n\n')}\n\nexport const ${capitalize(packName)}Icons = {\n${iconIds.map(id => {
    const componentName = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const componentNameCap = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    return `  '${id}': ${componentNameCap}`;
  }).join(',\n')}\n};`;

  fs.writeFileSync(path.join(srcGenPath, 'react.js'), reactDictContent);

  const reactDictTypes = `import React from 'react';\n\n${iconIds.map(id => {
    const componentName = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const componentNameCap = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    return `export declare const ${componentNameCap}: React.FC<React.SVGProps<SVGSVGElement>>;`;
  }).join('\n')}\n\nexport declare const ${capitalize(packName)}Icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;`;
  fs.writeFileSync(path.join(srcGenPath, 'react.d.ts'), reactDictTypes);

  // 3. Generate types for icon names
  const srcTypesPath = path.join(CONFIG.srcDir, packName);
  ensureDir(srcTypesPath);
  const srcTypeContent = `// Auto-generated types - DO NOT EDIT MANUALLY\n// This file is generated by scripts/build.js\n\nexport type ${capitalize(packName)}IconName = \n${iconIds.map(id => `  | '${id}'`).join('\n')};\n\nexport const ${packName}Icons: readonly string[] = [\n${iconIds.map(id => `  '${id}'`).join(',\n')}\n];`;
  fs.writeFileSync(path.join(srcTypesPath, 'types.ts'), srcTypeContent);

  console.log(`   ✅ Pack processed: | ${capitalize(packName).padStart(5, " ")}  |  ${files.length} icons`);
}

function types() {
  const importStatements = CONFIG.packs.map((pack) => `import type { ${capitalize(pack)}IconName } from './${pack}/types';`).join('\n');
  const iconNameUnion = CONFIG.packs.map((pack) => `${capitalize(pack)}IconName`).join(' | ');
  const iconPackUnion = CONFIG.packs.map((pack) => `'${pack}'`).join(' | ');

  const typeGeneral = `${importStatements}

export type IconPack = ${iconPackUnion};
export type IconName = ${iconNameUnion};

export default class ZIconElement extends HTMLElement {
  /**
   * Observed attributes that trigger re-rendering
   */
  static get observedAttributes(): string[];

  /**
   * Called when an observed attribute changes
   */
  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ): void;

  /**
   * Called when the element is inserted into the DOM
   */
  connectedCallback(): void;

  /**
   * Renders the icon based on current attributes
   */
  render(): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'z-icon': ZIconElement;
  }

  namespace JSX {
    interface IntrinsicElements {
      'z-icon': {
        name?: IconName;
        type?: IconPack;
        size?: string | number;
        color?: string;
        class?: string;
      };
    }
  }
}
`;

  fs.writeFileSync(path.join(CONFIG.distDir, 'index.d.ts'), typeGeneral, 'utf8');
  console.log('   ✅ General types');
}

function main() {
  console.log('\n🚀 Starting build process... \n');
  CONFIG.packs.forEach(pack => processPack(pack));
  types();
  console.log('\n🎉 Build process completed.\n');
}

main();
