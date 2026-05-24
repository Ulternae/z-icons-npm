const svgoConfig = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIds: {
            minify: false,
            preserve: [],
            preservePrefixes: [],
            remove: true,
          },
          removeUnknownsAndDefaults: {
            keepDataAttrs: true,
            keepAriaAttrs: true,
            keepRoleAttr: true,
          },
        },
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'data-name',
          'fill-rule',
        ],
      },
    },
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
    {
      name: 'cleanupNumericValues',
      params: {
        floatPrecision: 3,
      },
    },
    'convertTransform',
    {
      name: 'mergePaths',
      params: {
        force: false,
        noSpaceAfterFlags: true,
      },
    },
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },

    'removeEmptyContainers',
    'removeEmptyAttrs',
    'removeMetadata',
    {
      name: 'removeComments',
      params: {
        preservePatterns: false,
      },
    },
    'removeDesc',
    'removeTitle',
    'removeEditorsNSData',
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

export { svgoConfig };