import { defineZIconElement } from './create.js';
import { neoSprite } from '@zcorvus/icons/sprites/neo.js';

export { neoSprite } from '@zcorvus/icons/sprites/neo.js';
export const ZNeoSpriteElement = defineZIconElement('z-neo-sprite', {}, { type: 'neo', variant: 'regular', defaultVariant: 'regular', symbolDefaultVariant: 'regular', mode: 'sprite-only', spriteId: 'neo', sprite: neoSprite });
