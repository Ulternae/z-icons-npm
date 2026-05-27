export const iconConfig = {
  sourceDir: 'icons',
  packagesDir: 'packages',
  packs: ['core', 'neo', 'mina', 'bru', 'lan'],
  variants: ['light', 'solid', 'regular', 'regular-duo', 'thin'],
  defaultVariants: {
    core: 'regular',
    neo: 'regular',
    mina: 'light',
    bru: 'solid',
    lan: 'light',
  },
  publicVariantSuffixes: {
    thin: 'Thin',
    light: 'Light',
    solid: 'Solid',
    regular: 'Regular',
    'regular-duo': 'RegularDuo',
  },
  iconStyles: {
    core: { regular: 'fill', 'regular-duo': 'fill', solid: 'fill' },
    neo: { regular: 'fill', 'regular-duo': 'fill', solid: 'fill' },
    mina: { light: 'stroke', solid: 'fill' },
    bru: { solid: 'fill' },
    lan: { light: 'stroke' },
  },
};

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function toPascalCase(value) {
  return value
    .split('-')
    .filter(Boolean)
    .map(capitalize)
    .join('');
}

export function getDefaultVariant(pack) {
  return iconConfig.defaultVariants[pack] ?? 'light';
}

export function isDefaultVariant(pack, variant) {
  return variant === getDefaultVariant(pack);
}

export function getPublicVariantSuffix(pack, variant) {
  if (isDefaultVariant(pack, variant)) {
    return '';
  }

  return iconConfig.publicVariantSuffixes[variant] ?? toPascalCase(variant);
}

export function getVariantFileSuffix(pack, variant) {
  return isDefaultVariant(pack, variant) ? '' : `-${variant}`;
}

export function getIconStyle(pack, variant) {
  return iconConfig.iconStyles[pack]?.[variant] ?? 'stroke';
}

export function isFillIcon(pack, variant) {
  return getIconStyle(pack, variant) === 'fill';
}
