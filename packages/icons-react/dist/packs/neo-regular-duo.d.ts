import React from 'react';
import type { NeoRegularDuoIconName } from '../types/index.js';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const neoRegularDuoViewBoxes: Record<NeoRegularDuoIconName, string>;
export declare const ZNeoRegularDuoSprite: React.FC<ZIconSpriteProps>;
export type ZNeoRegularDuoProps = PackIconProps<NeoRegularDuoIconName>;
export declare const ZNeoRegularDuo: React.FC<ZNeoRegularDuoProps>;
export default ZNeoRegularDuo;
