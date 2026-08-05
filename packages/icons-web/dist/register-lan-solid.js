import { defineZIconElement } from './create.js';
import { lanIconsSolid } from './data/lan-solid.js';

export { lanIconsSolid } from './data/lan-solid.js';
export const ZLanSolidElement = defineZIconElement('z-lan-solid', { lan: { 'solid': lanIconsSolid } }, { type: 'lan', variant: 'solid', defaultVariant: 'solid' });
