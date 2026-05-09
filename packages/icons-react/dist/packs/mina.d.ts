import React from 'react';
import type { MinaIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const minaLightIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZMinaProps = PackIconProps<MinaIconName>;
export declare const ZMina: React.FC<ZMinaProps>;
export default ZMina;
