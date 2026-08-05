import { defineZIconElement } from './create.js';
import { neoSpriteRegularDuo } from './sprites/neo-regular-duo.js';

export { neoSpriteRegularDuo } from './sprites/neo-regular-duo.js';
export const ZNeoRegularDuoSpriteElement = defineZIconElement('z-neo-regular-duo-sprite', {}, { type: 'neo', variant: 'regular-duo', defaultVariant: 'regular-duo', symbolDefaultVariant: 'regular', mode: 'sprite-only', spriteId: 'neo-regular-duo', sprite: neoSpriteRegularDuo });
