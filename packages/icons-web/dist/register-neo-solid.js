import { defineZIconElement } from './create.js';
import { neoIconsSolid } from './data/neo-solid.js';

export { neoIconsSolid } from './data/neo-solid.js';
export const ZNeoSolidElement = defineZIconElement('z-neo-solid', { neo: { 'solid': neoIconsSolid } }, { type: 'neo', variant: 'solid', defaultVariant: 'solid' });
