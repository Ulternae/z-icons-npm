import React from 'react';

export interface LanFaceSunglassesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSunglasses: React.FC<LanFaceSunglassesProps>;
export default LanFaceSunglasses;
