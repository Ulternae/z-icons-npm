import React from 'react';
import type { LanThinIconName } from '../types/index.js';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const lanThinViewBoxes: Record<LanThinIconName, string>;
export declare const ZLanThinSprite: React.FC<ZIconSpriteProps>;
export type ZLanThinProps = PackIconProps<LanThinIconName>;
export declare const ZLanThin: React.FC<ZLanThinProps>;
export default ZLanThin;
