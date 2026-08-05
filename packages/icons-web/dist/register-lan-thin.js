import { defineZIconElement } from './create.js';
import { lanIconsThin } from './data/lan-thin.js';

export { lanIconsThin } from './data/lan-thin.js';
export const ZLanThinElement = defineZIconElement('z-lan-thin', { lan: { 'thin': lanIconsThin } }, { type: 'lan', variant: 'thin', defaultVariant: 'thin' });
