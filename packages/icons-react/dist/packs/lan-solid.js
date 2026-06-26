import { lanSpriteSolid } from '@zcorvus/icons/sprites/lan-solid.js';
import { lanSolidViewBoxes } from '../viewboxes/lan-solid.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { lanSolidViewBoxes } from '../viewboxes/lan-solid.js';
export const ZLanSolidSprite = createSpriteComponent('lan-solid', lanSpriteSolid);
export const ZLanSolid = createPackIcon({ pack: 'lan', variant: 'solid', defaultVariant: 'light', spriteId: 'lan-solid', sprite: lanSpriteSolid, viewBoxes: lanSolidViewBoxes });
export default ZLanSolid;
