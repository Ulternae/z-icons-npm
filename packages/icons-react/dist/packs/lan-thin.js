import { lanSpriteThin } from '@zcorvus/icons/sprites/lan-thin.js';
import { lanThinViewBoxes } from '../viewboxes/lan-thin.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { lanThinViewBoxes } from '../viewboxes/lan-thin.js';
export const ZLanThinSprite = createSpriteComponent('lan-thin', lanSpriteThin);
export const ZLanThin = createPackIcon({ pack: 'lan', variant: 'thin', defaultVariant: 'light', spriteId: 'lan-thin', sprite: lanSpriteThin, viewBoxes: lanThinViewBoxes });
export default ZLanThin;
