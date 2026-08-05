import { defineZIconElement } from './create.js';
import { neoIcons } from './data/neo.js';

export { neoIcons } from './data/neo.js';
export const ZNeoElement = defineZIconElement('z-neo', { neo: { 'regular': neoIcons } }, { type: 'neo', variant: 'regular', defaultVariant: 'regular' });
