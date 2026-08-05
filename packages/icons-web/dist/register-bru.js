import { defineZIconElement } from './create.js';
import { bruIcons } from './data/bru.js';

export { bruIcons } from './data/bru.js';
export const ZBruElement = defineZIconElement('z-bru', { bru: { 'solid': bruIcons } }, { type: 'bru', variant: 'solid', defaultVariant: 'solid' });
