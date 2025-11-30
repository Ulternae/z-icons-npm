const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');
const svgoConfig = require('./svgo.config');

const ICON_PACKS = [
  { dir: "src/core/icons" },
  { dir: "src/neo/icons" },
];


function findSvgFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Ignorar node_modules y dist
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        findSvgFiles(filePath, fileList);
      }
    } else if (file.endsWith('.svg')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Optimiza un archivo SVG
 */
function optimizeSvg(filePath) {
  try {
    const svgContent = fs.readFileSync(filePath, 'utf8');
    const originalSize = Buffer.byteLength(svgContent, 'utf8');

    const result = optimize(svgContent, {
      path: filePath,
      ...svgoConfig,
    });

    const optimizedSize = Buffer.byteLength(result.data, 'utf8');
    const saved = originalSize - optimizedSize;
    const percentage = ((saved / originalSize) * 100).toFixed(2);

    // Escribir el archivo optimizado
    fs.writeFileSync(filePath, result.data, 'utf8');

    return {
      success: true,
      file: filePath,
      originalSize,
      optimizedSize,
      saved,
      percentage,
    };
  } catch (error) {
    return {
      success: false,
      file: filePath,
      error: error.message,
    };
  }
}

/**
 * Función principal
 */
function main() {
  console.log('🚀 Optimizando paquetes de iconos...\n');

  let allSvgFiles = [];

  // Recopilar archivos de todos los directorios configurados
  ICON_PACKS.forEach(pack => {
    if (!fs.existsSync(pack.dir)) {
      console.warn(`⚠️  El directorio "${pack.dir}" no existe, se omitirá\n`);
      return;
    }

    console.log(`🔍 Buscando SVG en: ${pack.dir}`);
    const files = findSvgFiles(pack.dir);
    console.log(`   Encontrados: ${files.length} archivos\n`);
    allSvgFiles = allSvgFiles.concat(files);
  });

  const svgFiles = allSvgFiles;

  if (svgFiles.length === 0) {
    console.log('⚠️  No se encontraron archivos SVG');
    return;
  }

  console.log(`📦 Encontrados ${svgFiles.length} archivos SVG\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let successCount = 0;
  let errorCount = 0;

  svgFiles.forEach((file, index) => {
    const result = optimizeSvg(file);

    if (result.success) {
      successCount++;
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;

      const relativePath = path.relative(process.cwd(), result.file);
      console.log(
        `✅ ${index + 1}/${svgFiles.length} ${relativePath}`
      );
      console.log(
        `   ${(result.originalSize / 1024).toFixed(2)} KB → ${(result.optimizedSize / 1024).toFixed(2)} KB (${result.percentage}% reducción)\n`
      );
    } else {
      errorCount++;
      console.error(`❌ Error en ${result.file}: ${result.error}\n`);
    }
  });

  // Resumen final
  console.log('═'.repeat(60));
  console.log('📊 RESUMEN DE OPTIMIZACIÓN');
  console.log('═'.repeat(60));
  console.log(`✅ Archivos optimizados: ${successCount}`);
  console.log(`❌ Errores: ${errorCount}`);
  console.log(`📦 Tamaño original total: ${(totalOriginalSize / 1024).toFixed(2)} KB`);
  console.log(`📦 Tamaño optimizado total: ${(totalOptimizedSize / 1024).toFixed(2)} KB`);
  console.log(
    `💾 Espacio ahorrado: ${((totalOriginalSize - totalOptimizedSize) / 1024).toFixed(2)} KB (${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(2)}%)`
  );
  console.log('═'.repeat(60));
}

// Ejecutar
main();
