import React from 'react';

export interface LanVestSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVestSolid: React.FC<LanVestSolidProps>;
export default LanVestSolid;
