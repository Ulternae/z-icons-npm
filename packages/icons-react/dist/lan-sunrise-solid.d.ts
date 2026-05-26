import React from 'react';

export interface LanSunriseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunriseSolid: React.FC<LanSunriseSolidProps>;
export default LanSunriseSolid;
