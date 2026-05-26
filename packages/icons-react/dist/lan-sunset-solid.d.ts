import React from 'react';

export interface LanSunsetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunsetSolid: React.FC<LanSunsetSolidProps>;
export default LanSunsetSolid;
