// scripts/generate-types.js
const fs = require('fs');
const path = require('path');

/**
 * Genera el archivo de tipos consolidado en types/icon.d.ts
 */
function generateIconTypes() {
  console.log('🔨 Generando tipos de iconos...');

  // Leer los archivos de tipos generados
  const coreTypesPath = path.join(__dirname, '../src/core/core-sprite-types.ts');
  const neoTypesPath = path.join(__dirname, '../src/neo/neo-sprite-types.ts');

  let coreTypes = '';
  let neoTypes = '';

  if (fs.existsSync(coreTypesPath)) {
    coreTypes = fs.readFileSync(coreTypesPath, 'utf8');
    console.log('   ✅ Tipos core encontrados');
  }

  if (fs.existsSync(neoTypesPath)) {
    neoTypes = fs.readFileSync(neoTypesPath, 'utf8');
    console.log('   ✅ Tipos neo encontrados');
  }

  // Extraer los nombres de tipos
  const coreMatch = coreTypes.match(/export type (\w+IconName) =/);
  const neoMatch = neoTypes.match(/export type (\w+IconName) =/);

  const coreTypeName = coreMatch ? coreMatch[1] : 'CoreSpriteIconName';
  const neoTypeName = neoMatch ? neoMatch[1] : 'NeoSpriteIconName';

  // Generar el contenido del archivo de tipos
  const typesContent = `// types/icon.d.ts
/**
 * Z-Icon Web Component
 * A custom element for displaying SVG icons from sprite sheets
 */

${coreTypes}
${neoTypes}

export default class ZIcon extends HTMLElement {
  /**
   * Observed attributes that trigger re-rendering
   */
  static get observedAttributes(): string[];

  /**
   * Called when an observed attribute changes
   */
  attributeChangedCallback(): void;

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
    'z-icon': ZIcon;
  }

  namespace JSX {
    interface IntrinsicElements {
      'z-icon': {
        name?: ${coreTypeName} | ${neoTypeName};
        type?: 'core' | 'neo';
        size?: string | number;
        color?: string;
        class?: string;
      };
    }
  }
}
`;

  // Escribir el archivo
  const outputPath = path.join(__dirname, '../types/icon.d.ts');
  fs.writeFileSync(outputPath, typesContent, 'utf8');
  
  console.log('   ✅ Archivo types/icon.d.ts generado');
  console.log('✨ ¡Tipos generados exitosamente!\n');
}

// Ejecutar
generateIconTypes();
