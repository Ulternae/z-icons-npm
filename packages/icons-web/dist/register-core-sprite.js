import { defineZIconElement } from './create.js';
import { coreSprite } from './sprites/core.js';

export { coreSprite } from './sprites/core.js';
export const ZCoreSpriteElement = defineZIconElement('z-core-sprite', {}, { type: 'core', variant: 'regular', defaultVariant: 'regular', symbolDefaultVariant: 'regular', mode: 'sprite-only', spriteId: 'core', sprite: coreSprite });
