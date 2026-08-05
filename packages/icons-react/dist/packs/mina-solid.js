import { minaSpriteSolid } from '../sprites/mina-solid.js';
import { minaSolidViewBoxes } from '../viewboxes/mina-solid.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { minaSolidViewBoxes } from '../viewboxes/mina-solid.js';
export const ZMinaSolidSprite = createSpriteComponent('mina-solid', minaSpriteSolid);
export const ZMinaSolid = createPackIcon({ pack: 'mina', variant: 'solid', defaultVariant: 'light', spriteId: 'mina-solid', sprite: minaSpriteSolid, viewBoxes: minaSolidViewBoxes });
export default ZMinaSolid;
