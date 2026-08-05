import { defineZIconElement } from './create.js';
import { lanIconsRegular } from './data/lan-regular.js';

export { lanIconsRegular } from './data/lan-regular.js';
export const ZLanRegularElement = defineZIconElement('z-lan-regular', { lan: { 'regular': lanIconsRegular } }, { type: 'lan', variant: 'regular', defaultVariant: 'regular' });
