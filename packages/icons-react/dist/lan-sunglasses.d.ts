import React from 'react';

export interface LanSunglassesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunglasses: React.FC<LanSunglassesProps>;
export default LanSunglasses;
