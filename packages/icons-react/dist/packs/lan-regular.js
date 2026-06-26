import { lanSpriteRegular } from '@zcorvus/icons/sprites/lan-regular.js';
import { lanRegularViewBoxes } from '../viewboxes/lan-regular.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { lanRegularViewBoxes } from '../viewboxes/lan-regular.js';
export const ZLanRegularSprite = createSpriteComponent('lan-regular', lanSpriteRegular);
export const ZLanRegular = createPackIcon({ pack: 'lan', variant: 'regular', defaultVariant: 'light', spriteId: 'lan-regular', sprite: lanSpriteRegular, viewBoxes: lanRegularViewBoxes });
export default ZLanRegular;
