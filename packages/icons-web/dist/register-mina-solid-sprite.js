import { defineZIconElement } from './create.js';
import { minaSpriteSolid } from '@zcorvus/icons/sprites/mina-solid.js';

export { minaSpriteSolid } from '@zcorvus/icons/sprites/mina-solid.js';
export const ZMinaSolidSpriteElement = defineZIconElement('z-mina-solid-sprite', {}, { type: 'mina', variant: 'solid', defaultVariant: 'solid', symbolDefaultVariant: 'light', mode: 'sprite-only', spriteId: 'mina-solid', sprite: minaSpriteSolid });
