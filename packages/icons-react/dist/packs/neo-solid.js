import { neoSpriteSolid } from '@zcorvus/icons/sprites/neo-solid.js';
import { neoSolidViewBoxes } from '../viewboxes/neo-solid.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { neoSolidViewBoxes } from '../viewboxes/neo-solid.js';
export const ZNeoSolidSprite = createSpriteComponent('neo-solid', neoSpriteSolid);
export const ZNeoSolid = createPackIcon({ pack: 'neo', variant: 'solid', defaultVariant: 'regular', spriteId: 'neo-solid', sprite: neoSpriteSolid, viewBoxes: neoSolidViewBoxes });
export default ZNeoSolid;
