import { defineZIconElement } from './create.js';
import { bruSprite } from '@zcorvus/icons/sprites/bru.js';

export { bruSprite } from '@zcorvus/icons/sprites/bru.js';
export const ZBruSpriteElement = defineZIconElement('z-bru-sprite', {}, { type: 'bru', variant: 'solid', defaultVariant: 'solid', symbolDefaultVariant: 'solid', mode: 'sprite-only', spriteId: 'bru', sprite: bruSprite });
