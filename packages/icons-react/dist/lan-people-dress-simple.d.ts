import React from 'react';

export interface LanPeopleDressSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleDressSimple: React.FC<LanPeopleDressSimpleProps>;
export default LanPeopleDressSimple;
