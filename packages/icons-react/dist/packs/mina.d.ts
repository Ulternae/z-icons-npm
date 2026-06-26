import React from 'react';
import type { MinaIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const minaLightViewBoxes: Record<MinaIconName, string>;
export declare const ZMinaSprite: React.FC<ZIconSpriteProps>;
export type ZMinaProps = PackIconProps<MinaIconName>;
export declare const ZMina: React.FC<ZMinaProps>;
export default ZMina;
