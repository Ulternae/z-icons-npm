import React from 'react';

export interface LanMountainSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainSunSolid: React.FC<LanMountainSunSolidProps>;
export default LanMountainSunSolid;
