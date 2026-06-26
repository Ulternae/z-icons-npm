import React from 'react';
import type { MinaIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const minaSolidViewBoxes: Record<MinaIconName, string>;
export declare const ZMinaSolidSprite: React.FC<ZIconSpriteProps>;
export type ZMinaSolidProps = PackIconProps<MinaIconName>;
export declare const ZMinaSolid: React.FC<ZMinaSolidProps>;
export default ZMinaSolid;
