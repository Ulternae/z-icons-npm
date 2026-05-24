import type { AllIconNames, IconPack, IconVariant } from './types/index.js';
export type { AllIconNames, CoreIconName, NeoIconName, MinaIconName, BruIconName, IconPack, IconVariant } from './types/index.js';
export { coreIconNames, neoIconNames, minaIconNames, bruIconNames } from './names/index.js';
export { coreIcons, neoIcons, minaIcons, bruIcons } from './svg/index.js';
export declare function getIconSvg(pack: IconPack, name: AllIconNames, variant?: IconVariant): string | undefined;
