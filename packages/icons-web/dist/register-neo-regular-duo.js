import { defineZIconElement } from './create.js';
import { neoIconsRegularDuo } from './data/neo-regular-duo.js';

export { neoIconsRegularDuo } from './data/neo-regular-duo.js';
export const ZNeoRegularDuoElement = defineZIconElement('z-neo-regular-duo', { neo: { 'regular-duo': neoIconsRegularDuo } }, { type: 'neo', variant: 'regular-duo', defaultVariant: 'regular-duo' });
