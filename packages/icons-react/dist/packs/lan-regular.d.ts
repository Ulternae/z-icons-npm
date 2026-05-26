import React from 'react';
import type { LanIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const lanRegularIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZLanRegularProps = PackIconProps<LanIconName>;
export declare const ZLanRegular: React.FC<ZLanRegularProps>;
export default ZLanRegular;
