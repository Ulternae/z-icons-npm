const fs = require('fs');
const path = require('path');

// Configuración de los paquetes de iconos
const ICON_PACKS = [
  { 
    dir: 'src/core/icons', 
    outputFile: 'src/core/core-sprite.ts',
    spriteName: 'coreSprite'
  },
  { 
    dir: 'src/neo/icons', 
    outputFile: 'src/neo/core-sprite.ts',
    spriteName: 'neoSprite'
  },
];

/**
 * Encuentra todos los archivos SVG en un directorio
 */
function findSvgFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir);
  return files
    .filter(file => file.endsWith('.svg'))
    .map(file => path.join(dir, file))
    .sort(); // Ordenar alfabéticamente para consistencia
}

/**
 * Extrae el nombre del icono desde el nombre del archivo
 */
function getIconName(filePath) {
  const basename = path.basename(filePath, '.svg');
  // Convertir a kebab-case si no lo está ya
  return basename.toLowerCase().replace(/[_\s]+/g, '-');
}

/**
 * Procesa el contenido SVG para sprite
 * Extrae el contenido interno del SVG y sus atributos
 */
function processSvgContent(svgContent, iconName) {
  // Extraer viewBox
  const viewBoxMatch = svgContent.match(/viewBox=["']([^"']+)["']/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Extraer el contenido interno del SVG (sin las etiquetas <svg>)
  const contentMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const content = contentMatch ? contentMatch[1].trim() : '';

  return {
    id: iconName,
    viewBox,
    content
  };
}

/**
 * Genera el contenido del sprite TypeScript con formato <symbol>
 */
function generateSpriteFile(icons, spriteName) {
  // Generar los símbolos SVG
  const symbols = icons.map(icon => {
    return `  <symbol id="${icon.id}" viewBox="${icon.viewBox}">
    ${icon.content}
  </symbol>`;
  }).join('\n\n');

  // Escapar el sprite completo para template literal
  const spriteContent = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
${symbols}
</svg>`;

  const escapedSprite = spriteContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

  // Generar array de IDs para referencia
  const iconIds = icons.map(icon => `'${icon.id}'`).join(', ');

  return `/**
 * SVG Sprite - Generado automáticamente
 * No editar manualmente - usar build-sprites.js
 */

/**
 * Sprite SVG completo con todos los iconos como símbolos
 */
export const ${spriteName} = \`${escapedSprite}\`;

/**
 * IDs de iconos disponibles
 */
export const iconIds = [${iconIds}] as const;

export type IconId = typeof iconIds[number];

/**
 * Verifica si un ID de icono existe
 */
export function hasIcon(id: string): id is IconId {
  return iconIds.includes(id as IconId);
}

/**
 * Obtiene todos los IDs de iconos disponibles
 */
export function getIconIds(): readonly string[] {
  return iconIds;
}

/**
 * Renderiza un icono usando SVG <use>
 * Este es el método más eficiente para usar sprites
 */
export function renderIcon(
  id: IconId | string,
  options: {
    class?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
  } = {}
): string {
  if (!hasIcon(id)) {
    console.warn(\`Icon "\${id}" not found\`);
    return '';
  }

  const { class: className = '', width = '24', height = '24', color } = options;
  const style = color ? \` style="color: \${color}"\` : '';
  const classAttr = className ? \` class="\${className}"\` : '';

  return \`<svg\${classAttr} width="\${width}" height="\${height}"\${style}><use href="#\${id}"/></svg>\`;
}

/**
 * Inyecta el sprite en el DOM (para uso en navegador)
 * Llama esta función una vez al inicio de tu aplicación
 */
export function injectSprite(): void {
  if (typeof document === 'undefined') return;
  
  const existingSprite = document.getElementById('icon-sprite-${spriteName}');
  if (existingSprite) return;

  const div = document.createElement('div');
  div.id = 'icon-sprite-${spriteName}';
  div.innerHTML = ${spriteName};
  document.body.insertBefore(div, document.body.firstChild);
}
`;
}

/**
 * Construye un sprite desde un directorio de iconos
 */
function buildSprite(pack) {
  console.log(`\n🔨 Construyendo sprite: ${pack.spriteName}`);
  console.log(`   Directorio: ${pack.dir}`);

  const svgFiles = findSvgFiles(pack.dir);

  if (svgFiles.length === 0) {
    console.warn(`   ⚠️  No se encontraron archivos SVG`);
    return { success: false, count: 0 };
  }

  console.log(`   📦 Procesando ${svgFiles.length} iconos...`);

  const icons = [];
  const errors = [];

  svgFiles.forEach(filePath => {
    try {
      const svgContent = fs.readFileSync(filePath, 'utf8');
      const iconName = getIconName(filePath);
      const iconData = processSvgContent(svgContent, iconName);
      icons.push(iconData);
      console.log(`      ✅ ${iconName}`);
    } catch (error) {
      const iconName = getIconName(filePath);
      errors.push({ iconName, error: error.message });
      console.error(`      ❌ ${iconName}: ${error.message}`);
    }
  });

  // Generar archivo TypeScript
  const spriteContent = generateSpriteFile(icons, pack.spriteName);
  
  // Asegurar que existe el directorio de salida
  const outputDir = path.dirname(pack.outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(pack.outputFile, spriteContent, 'utf8');
  
  console.log(`   ✅ Sprite generado: ${pack.outputFile}`);
  console.log(`   📊 Total: ${icons.length} iconos`);

  if (errors.length > 0) {
    console.log(`   ⚠️  Errores: ${errors.length}`);
  }

  return { 
    success: true, 
    count: icons.length, 
    errors: errors.length 
  };
}

/**
 * Función principal
 */
function main() {
  console.log('🚀 Generando sprites de iconos...');
  console.log('═'.repeat(60));

  let totalIcons = 0;
  let totalErrors = 0;
  const results = [];

  ICON_PACKS.forEach(pack => {
    const result = buildSprite(pack);
    if (result.success) {
      totalIcons += result.count;
      totalErrors += result.errors || 0;
    }
    results.push(result);
  });

  // Resumen final
  console.log('\n' + '═'.repeat(60));
  console.log('📊 RESUMEN');
  console.log('═'.repeat(60));
  console.log(`✅ Sprites generados: ${results.filter(r => r.success).length}/${ICON_PACKS.length}`);
  console.log(`📦 Total de iconos: ${totalIcons}`);
  if (totalErrors > 0) {
    console.log(`❌ Total de errores: ${totalErrors}`);
  }
  console.log('═'.repeat(60));
  console.log('✨ ¡Sprites construidos exitosamente!\n');
}

// Ejecutar
main();
