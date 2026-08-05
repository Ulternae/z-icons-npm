import { defineZIconElement } from './create.js';
import { coreIconsRegularDuo } from './data/core-regular-duo.js';

export { coreIconsRegularDuo } from './data/core-regular-duo.js';
export const ZCoreRegularDuoElement = defineZIconElement('z-core-regular-duo', { core: { 'regular-duo': coreIconsRegularDuo } }, { type: 'core', variant: 'regular-duo', defaultVariant: 'regular-duo' });
