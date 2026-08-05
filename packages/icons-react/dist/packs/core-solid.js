import { coreSpriteSolid } from '../sprites/core-solid.js';
import { coreSolidViewBoxes } from '../viewboxes/core-solid.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { coreSolidViewBoxes } from '../viewboxes/core-solid.js';
export const ZCoreSolidSprite = createSpriteComponent('core-solid', coreSpriteSolid);
export const ZCoreSolid = createPackIcon({ pack: 'core', variant: 'solid', defaultVariant: 'regular', spriteId: 'core-solid', sprite: coreSpriteSolid, viewBoxes: coreSolidViewBoxes });
export default ZCoreSolid;
