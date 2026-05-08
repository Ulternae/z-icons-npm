export { coreIconNames, coreIcons } from '../core/index.js';
export { neoIconNames, neoIcons } from '../neo/index.js';
export { minaIconNames, minaIcons } from '../mina/index.js';
import { C as CoreIconName } from '../types-BFL-wEQu.js';
import { N as NeoIconName } from '../types-BcsLnsRh.js';
import { M as MinaIconName } from '../types-CTzkKYgQ.js';

type AllIconNames = CoreIconName | NeoIconName | MinaIconName;
type IconPack = 'core' | 'neo' | 'mina';
type IconVariant = 'light' | 'solid' | 'regular' | 'thin';

export { type AllIconNames, CoreIconName, type IconPack, type IconVariant, MinaIconName, NeoIconName };
