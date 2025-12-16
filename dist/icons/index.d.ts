import { C as CoreIconName, N as NeoIconName, M as MinaIconName } from '../types-Hclbz-Cy.js';

declare const coreIcons: Record<string, Record<string, string>>;
declare const coreIconNames: string[];

declare const neoIcons: Record<string, Record<string, string>>;
declare const neoIconNames: string[];

declare const minaIcons: Record<string, Record<string, string>>;
declare const minaIconNames: string[];

type AllIconNames = CoreIconName | NeoIconName | MinaIconName;
type IconPack = 'core' | 'neo' | 'mina';

export { type AllIconNames, CoreIconName, type IconPack, MinaIconName, NeoIconName, coreIconNames, coreIcons, minaIconNames, minaIcons, neoIconNames, neoIcons };
