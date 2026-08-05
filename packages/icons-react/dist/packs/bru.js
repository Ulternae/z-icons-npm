import { bruSprite } from '../sprites/bru.js';
import { bruSolidViewBoxes } from '../viewboxes/bru.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { bruSolidViewBoxes } from '../viewboxes/bru.js';
export const ZBruSprite = createSpriteComponent('bru', bruSprite);
export const ZBru = createPackIcon({ pack: 'bru', variant: 'solid', defaultVariant: 'solid', spriteId: 'bru', sprite: bruSprite, viewBoxes: bruSolidViewBoxes });
export default ZBru;
