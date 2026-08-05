import { defineZIconElement } from './create.js';
import { coreIconsSolid } from './data/core-solid.js';

export { coreIconsSolid } from './data/core-solid.js';
export const ZCoreSolidElement = defineZIconElement('z-core-solid', { core: { 'solid': coreIconsSolid } }, { type: 'core', variant: 'solid', defaultVariant: 'solid' });
