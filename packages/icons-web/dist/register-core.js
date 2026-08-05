import { defineZIconElement } from './create.js';
import { coreIcons } from './data/core.js';

export { coreIcons } from './data/core.js';
export const ZCoreElement = defineZIconElement('z-core', { core: { 'regular': coreIcons } }, { type: 'core', variant: 'regular', defaultVariant: 'regular' });
