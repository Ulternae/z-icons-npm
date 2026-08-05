import { defineZIconElement } from './create.js';
import { coreSpriteSolid } from './sprites/core-solid.js';

export { coreSpriteSolid } from './sprites/core-solid.js';
export const ZCoreSolidSpriteElement = defineZIconElement('z-core-solid-sprite', {}, { type: 'core', variant: 'solid', defaultVariant: 'solid', symbolDefaultVariant: 'regular', mode: 'sprite-only', spriteId: 'core-solid', sprite: coreSpriteSolid });
