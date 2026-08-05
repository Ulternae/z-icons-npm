import { defineZIconElement } from './create.js';
import { minaIcons } from './data/mina.js';

export { minaIcons } from './data/mina.js';
export const ZMinaElement = defineZIconElement('z-mina', { mina: { 'light': minaIcons } }, { type: 'mina', variant: 'light', defaultVariant: 'light' });
