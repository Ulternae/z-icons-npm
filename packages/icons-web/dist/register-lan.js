import { defineZIconElement } from './create.js';
import { lanIcons } from './data/lan.js';

export { lanIcons } from './data/lan.js';
export const ZLanElement = defineZIconElement('z-lan', { lan: { 'light': lanIcons } }, { type: 'lan', variant: 'light', defaultVariant: 'light' });
