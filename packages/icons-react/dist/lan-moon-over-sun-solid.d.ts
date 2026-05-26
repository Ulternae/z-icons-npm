import React from 'react';

export interface LanMoonOverSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonOverSunSolid: React.FC<LanMoonOverSunSolidProps>;
export default LanMoonOverSunSolid;
