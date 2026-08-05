import { defineZIconElement } from './create.js';
import { minaSprite } from './sprites/mina.js';

export { minaSprite } from './sprites/mina.js';
export const ZMinaSpriteElement = defineZIconElement('z-mina-sprite', {}, { type: 'mina', variant: 'light', defaultVariant: 'light', symbolDefaultVariant: 'light', mode: 'sprite-only', spriteId: 'mina', sprite: minaSprite });
