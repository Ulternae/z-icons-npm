import { defineZIconElement } from './create.js';
import { coreSpriteRegularDuo } from './sprites/core-regular-duo.js';

export { coreSpriteRegularDuo } from './sprites/core-regular-duo.js';
export const ZCoreRegularDuoSpriteElement = defineZIconElement('z-core-regular-duo-sprite', {}, { type: 'core', variant: 'regular-duo', defaultVariant: 'regular-duo', symbolDefaultVariant: 'regular', mode: 'sprite-only', spriteId: 'core-regular-duo', sprite: coreSpriteRegularDuo });
