import React from 'react';
import type { LanIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const lanThinIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZLanThinProps = PackIconProps<LanIconName>;
export declare const ZLanThin: React.FC<ZLanThinProps>;
export default ZLanThin;
