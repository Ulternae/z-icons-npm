import { defineZIconElement } from './create.js';
import { neoSpriteSolid } from '@zcorvus/icons/sprites/neo-solid.js';

export { neoSpriteSolid } from '@zcorvus/icons/sprites/neo-solid.js';
export const ZNeoSolidSpriteElement = defineZIconElement('z-neo-solid-sprite', {}, { type: 'neo', variant: 'solid', defaultVariant: 'solid', symbolDefaultVariant: 'regular', mode: 'sprite-only', spriteId: 'neo-solid', sprite: neoSpriteSolid });
