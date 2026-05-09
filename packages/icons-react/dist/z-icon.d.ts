import React from 'react';
import type { AllIconNames, IconPack, IconVariant } from '@zcorvus/icons/types';

export interface ZIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  type: IconPack;
  name: AllIconNames;
  variant?: IconVariant;
  size?: string | number;
}

export declare function ZIcon(props: ZIconProps): React.ReactElement | null;
