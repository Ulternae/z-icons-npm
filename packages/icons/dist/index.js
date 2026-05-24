import { coreIcons } from './svg/core.js';
import { neoIcons } from './svg/neo.js';
import { minaIcons } from './svg/mina.js';
import { bruIcons } from './svg/bru.js';

const iconCollections = {
  core: coreIcons,
  neo: neoIcons,
  mina: minaIcons,
  bru: bruIcons
};

export function getIconSvg(pack, name, variant = 'light') {
  return iconCollections[pack]?.[variant]?.[name];
}

export { coreIcons } from './svg/core.js';
export { neoIcons } from './svg/neo.js';
export { minaIcons } from './svg/mina.js';
export { bruIcons } from './svg/bru.js';
export { coreIconNames } from './names/core.js';
export { neoIconNames } from './names/neo.js';
export { minaIconNames } from './names/mina.js';
export { bruIconNames } from './names/bru.js';
