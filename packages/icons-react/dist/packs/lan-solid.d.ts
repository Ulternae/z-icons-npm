import React from 'react';
import type { LanSolidIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const lanSolidViewBoxes: Record<LanSolidIconName, string>;
export declare const ZLanSolidSprite: React.FC<ZIconSpriteProps>;
export type ZLanSolidProps = PackIconProps<LanSolidIconName>;
export declare const ZLanSolid: React.FC<ZLanSolidProps>;
export default ZLanSolid;
