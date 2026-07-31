import { getPublicVariantSuffix } from '../icon-config.js';

export function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function toPascalCase(value) {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

export function toKebabCase(value) {
  return value
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export function getPublicIconName(pack, iconName, variant) {
  return `${capitalize(pack)}${toPascalCase(iconName)}${getPublicVariantSuffix(pack, variant)}`;
}

export function getPublicFileName(pack, iconName, variant) {
  return toKebabCase(getPublicIconName(pack, iconName, variant));
}

export function getPackIconNameType(pack) {
  return `${capitalize(pack)}IconName`;
}

export function getVariantIconNameType(pack, variant) {
  return `${capitalize(pack)}${toPascalCase(variant)}IconName`;
}
