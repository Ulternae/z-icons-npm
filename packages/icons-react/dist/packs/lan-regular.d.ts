import React from 'react';
import type { LanIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const lanRegularViewBoxes: Record<LanIconName, string>;
export declare const ZLanRegularSprite: React.FC<ZIconSpriteProps>;
export type ZLanRegularProps = PackIconProps<LanIconName>;
export declare const ZLanRegular: React.FC<ZLanRegularProps>;
export default ZLanRegular;
