import React from 'react';
import type { CoreIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const coreRegularDuoIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZCoreRegularDuoProps = PackIconProps<CoreIconName>;
export declare const ZCoreRegularDuo: React.FC<ZCoreRegularDuoProps>;
export default ZCoreRegularDuo;
