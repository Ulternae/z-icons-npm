import { defineZIconElement } from './create.js';
import { minaIconsSolid } from './data/mina-solid.js';

export { minaIconsSolid } from './data/mina-solid.js';
export const ZMinaSolidElement = defineZIconElement('z-mina-solid', { mina: { 'solid': minaIconsSolid } }, { type: 'mina', variant: 'solid', defaultVariant: 'solid' });
