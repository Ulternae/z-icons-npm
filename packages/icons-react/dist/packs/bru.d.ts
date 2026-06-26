import React from 'react';
import type { BruIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const bruSolidViewBoxes: Record<BruIconName, string>;
export declare const ZBruSprite: React.FC<ZIconSpriteProps>;
export type ZBruProps = PackIconProps<BruIconName>;
export declare const ZBru: React.FC<ZBruProps>;
export default ZBru;
