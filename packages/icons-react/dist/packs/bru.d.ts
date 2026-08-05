import React from 'react';
import type { BruSolidIconName } from '../types/index.js';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const bruSolidViewBoxes: Record<BruSolidIconName, string>;
export declare const ZBruSprite: React.FC<ZIconSpriteProps>;
export type ZBruProps = PackIconProps<BruSolidIconName>;
export declare const ZBru: React.FC<ZBruProps>;
export default ZBru;
