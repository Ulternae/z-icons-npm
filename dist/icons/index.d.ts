export { C as CoreIconName, M as MinaIconName, N as NeoIconName } from '../types-trFXAMOM.js';

declare const coreIcons: Record<string, string>;
declare const coreIconNames: readonly string[];

declare const neoIcons: Record<string, string>;
declare const neoIconNames: readonly string[];

declare const minaIcons: Record<string, string>;
declare const minaIconNames: readonly string[];

type IconPack = 'core' | 'neo' | 'mina';

export { type IconPack, coreIconNames, coreIcons, minaIconNames, minaIcons, neoIconNames, neoIcons };
