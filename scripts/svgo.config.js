/**
 * Configuración de SVGO para optimización de iconos
 * Puedes personalizar estas opciones según tus necesidades
 */
module.exports = {
  multipass: true, // Ejecutar optimizaciones múltiples veces
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Mantener viewBox para escalado correcto
          removeViewBox: false,
          // Configuración de IDs
          cleanupIds: {
            minify: false,
            preserve: [],
            preservePrefixes: [],
            remove: true,
          },
          // Mantener algunos atributos útiles
          removeUnknownsAndDefaults: {
            keepDataAttrs: true,
            keepAriaAttrs: true,
            keepRoleAttr: true,
          },
        },
      },
    },
    // Remover xmlns para iconos inline (opcional)
    'removeXMLNS',
    
    // Plugins adicionales personalizados
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'data-name',
          'fill-rule', // Opcional: remover si no es necesario
        ],
      },
    },
    
    // Convertir colores a formato corto
    {
      name: 'convertColors',
      params: {
        currentColor: true,
        names2hex: true,
        rgb2hex: true,
        shorthex: true,
        shortname: true,
      },
    },
    
    // Precisión numérica
    {
      name: 'cleanupNumericValues',
      params: {
        floatPrecision: 3,
      },
    },
    
    // Optimizar transformaciones
    'convertTransform',
    
    // Combinar paths cuando sea posible
    {
      name: 'mergePaths',
      params: {
        force: false,
        noSpaceAfterFlags: true,
      },
    },
    
    // Remover elementos vacíos
    'removeEmptyContainers',
    'removeEmptyAttrs',
    
    // Ordenar atributos
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
    
    // Remover metadata innecesaria
    'removeMetadata',
    'removeComments',
    'removeDesc',
    'removeTitle',
    'removeEditorsNSData',
    
    // Optimizaciones adicionales
    'collapseGroups',
    'convertShapeToPath',
    'convertEllipseToCircle',
    'convertPathData',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'removeHiddenElems',
    'minifyStyles',
    'cleanupListOfValues',
  ],
};
