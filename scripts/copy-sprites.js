const fs = require('fs');
const path = require('path');

// Configuración de los sprites a extraer
const SPRITE_FILES = [
    {
    source: 'src/core/core-sprite.ts',
    dest: 'dist/core-sprite.svg',
    varName: 'coreSprite'
  },
  {
    source: 'src/neo/neo-sprite.ts',
    dest: 'dist/neo-sprite.svg',
    varName: 'neoSprite'
  }
];

/**
 * Extrae el contenido SVG de un archivo TypeScript y lo guarda como SVG
 */
function extractAndSaveSvg(source, dest, varName) {
  try {
    // Verificar que existe el archivo origen
    if (!fs.existsSync(source)) {
      console.warn(`   ⚠️  Archivo no encontrado: ${source}`);
      return { success: false, error: 'Archivo no existe' };
    }

    // Leer el contenido del archivo TypeScript
    const content = fs.readFileSync(source, 'utf8');

    // Extraer el contenido del sprite usando regex
    const regex = new RegExp(`export const ${varName} = \`([\\s\\S]*?)\`;`, 'm');
    const match = content.match(regex);

    if (!match) {
      console.error(`   ❌ No se pudo encontrar la variable ${varName}`);
      return { success: false, error: 'Variable no encontrada' };
    }

    // Obtener el contenido SVG y desescapar
    let svgContent = match[1]
      .replace(/\\\\/g, '\\')
      .replace(/\\`/g, '`')
      .replace(/\\\$/g, '$');

    // Crear el directorio de destino si no existe
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Guardar el archivo SVG
    fs.writeFileSync(dest, svgContent, 'utf8');
    console.log(`   ✅ Extraído: ${source} → ${dest}`);
    
    return { success: true };
  } catch (error) {
    console.error(`   ❌ Error procesando ${source}: ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * Función principal
 */
function main() {
  console.log('🚀 Extrayendo sprites a SVG...');
  console.log('═'.repeat(60));

  let successCount = 0;
  let errorCount = 0;

  SPRITE_FILES.forEach(({ source, dest, varName }) => {
    console.log(`\n📄 Procesando: ${source}`);
    const result = extractAndSaveSvg(source, dest, varName);
    
    if (result.success) {
      successCount++;
    } else {
      errorCount++;
    }
  });

  // Resumen final
  console.log('\n' + '═'.repeat(60));
  console.log('📊 RESUMEN');
  console.log('═'.repeat(60));
  console.log(`✅ Sprites extraídos: ${successCount}/${SPRITE_FILES.length}`);
  if (errorCount > 0) {
    console.log(`❌ Errores: ${errorCount}`);
  }
  console.log('═'.repeat(60));
  console.log('✨ ¡Extracción completada!\n');

  // Retornar código de salida
  process.exit(errorCount > 0 ? 1 : 0);
}

// Ejecutar
main();
