import React from 'react';
import type { LanIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const lanThinViewBoxes: Record<LanIconName, string>;
export declare const ZLanThinSprite: React.FC<ZIconSpriteProps>;
export type ZLanThinProps = PackIconProps<LanIconName>;
export declare const ZLanThin: React.FC<ZLanThinProps>;
export default ZLanThin;
