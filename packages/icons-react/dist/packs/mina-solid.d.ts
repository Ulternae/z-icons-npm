import React from 'react';
import type { MinaSolidIconName } from '../types/index.js';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const minaSolidViewBoxes: Record<MinaSolidIconName, string>;
export declare const ZMinaSolidSprite: React.FC<ZIconSpriteProps>;
export type ZMinaSolidProps = PackIconProps<MinaSolidIconName>;
export declare const ZMinaSolid: React.FC<ZMinaSolidProps>;
export default ZMinaSolid;
