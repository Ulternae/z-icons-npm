import { defineZIconElement } from './create.js';
import { neoSpriteSolid } from './sprites/neo-solid.js';

export { neoSpriteSolid } from './sprites/neo-solid.js';
export const ZNeoSolidSpriteElement = defineZIconElement('z-neo-solid-sprite', {}, { type: 'neo', variant: 'solid', defaultVariant: 'solid', symbolDefaultVariant: 'regular', mode: 'sprite-only', spriteId: 'neo-solid', sprite: neoSpriteSolid });
