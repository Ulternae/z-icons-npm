import type { AllIconNames, IconPack, IconVariant } from './types/index.js';
export type { AllIconNames, CoreIconName, NeoIconName, MinaIconName, BruIconName, LanIconName, IconPack, IconVariant } from './types/index.js';
export { coreIconNames, neoIconNames, minaIconNames, bruIconNames, lanIconNames } from './names/index.js';
export { coreIcons, neoIcons, minaIcons, bruIcons, lanIcons } from './svg/index.js';
export declare function getIconSvg(pack: IconPack, name: AllIconNames, variant?: IconVariant): string | undefined;
