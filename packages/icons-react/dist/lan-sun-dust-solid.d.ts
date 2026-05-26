import React from 'react';

export interface LanSunDustSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunDustSolid: React.FC<LanSunDustSolidProps>;
export default LanSunDustSolid;
