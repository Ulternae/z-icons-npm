import { defineZIconElement } from './create.js';
import { minaSpriteSolid } from './sprites/mina-solid.js';

export { minaSpriteSolid } from './sprites/mina-solid.js';
export const ZMinaSolidSpriteElement = defineZIconElement('z-mina-solid-sprite', {}, { type: 'mina', variant: 'solid', defaultVariant: 'solid', symbolDefaultVariant: 'light', mode: 'sprite-only', spriteId: 'mina-solid', sprite: minaSpriteSolid });
