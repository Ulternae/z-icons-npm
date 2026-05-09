import React from 'react';
import type { CoreIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const coreLightIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZCoreProps = PackIconProps<CoreIconName>;
export declare const ZCore: React.FC<ZCoreProps>;
export default ZCore;
