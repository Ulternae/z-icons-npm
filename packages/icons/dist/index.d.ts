import type { AllIconNames, IconPack, IconVariant } from './types/index.js';
export type { AllIconNames, CoreIconName, IconPack, IconVariant, MinaIconName, NeoIconName } from './types/index.js';
export { coreIconNames, minaIconNames, neoIconNames } from './names/index.js';
export { coreIcons, minaIcons, neoIcons } from './svg/index.js';
export declare function getIconSvg(pack: IconPack, name: AllIconNames, variant?: IconVariant): string | undefined;
