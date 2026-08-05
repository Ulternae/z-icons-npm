import React from 'react';
import type { LanRegularIconName } from '../types/index.js';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const lanRegularViewBoxes: Record<LanRegularIconName, string>;
export declare const ZLanRegularSprite: React.FC<ZIconSpriteProps>;
export type ZLanRegularProps = PackIconProps<LanRegularIconName>;
export declare const ZLanRegular: React.FC<ZLanRegularProps>;
export default ZLanRegular;
