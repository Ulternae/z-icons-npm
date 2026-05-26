import React from 'react';

export interface LanSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunSolid: React.FC<LanSunSolidProps>;
export default LanSunSolid;
