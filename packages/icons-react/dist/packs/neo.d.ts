import React from 'react';
import type { NeoRegularIconName } from '../types/index.js';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const neoRegularViewBoxes: Record<NeoRegularIconName, string>;
export declare const ZNeoSprite: React.FC<ZIconSpriteProps>;
export type ZNeoProps = PackIconProps<NeoRegularIconName>;
export declare const ZNeo: React.FC<ZNeoProps>;
export default ZNeo;
