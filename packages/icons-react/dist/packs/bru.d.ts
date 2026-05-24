import React from 'react';
import type { BruIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const bruLightIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZBruProps = PackIconProps<BruIconName>;
export declare const ZBru: React.FC<ZBruProps>;
export default ZBru;
