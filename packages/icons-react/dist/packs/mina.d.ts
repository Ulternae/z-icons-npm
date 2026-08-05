import React from 'react';
import type { MinaLightIconName } from '../types/index.js';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const minaLightViewBoxes: Record<MinaLightIconName, string>;
export declare const ZMinaSprite: React.FC<ZIconSpriteProps>;
export type ZMinaProps = PackIconProps<MinaLightIconName>;
export declare const ZMina: React.FC<ZMinaProps>;
export default ZMina;
