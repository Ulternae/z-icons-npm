// Auto-generated file - Central export point for all icons
// Re-export all icon dictionaries and names from all packs
export { coreIcons, coreIconNames } from '../core/icons.js';
export { neoIcons, neoIconNames } from '../neo/icons.js';
export { minaIcons, minaIconNames } from '../mina/icons.js';

// Export types
export type { CoreIconName } from '../core/types.ts';
export type { NeoIconName } from '../neo/types.ts';
export type { MinaIconName } from '../mina/types.ts';

// Import types to use them locally
import type { CoreIconName } from '../core/types.ts';
import type { NeoIconName } from '../neo/types.ts';
import type { MinaIconName } from '../mina/types.ts';

// Combined icon pack type
export type AllIconNames = CoreIconName | NeoIconName | MinaIconName;
export type IconPack = 'core' | 'neo' | 'mina';
