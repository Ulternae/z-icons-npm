import React from 'react';

export interface LanImageCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCircleCheckSolid: React.FC<LanImageCircleCheckSolidProps>;
export default LanImageCircleCheckSolid;
