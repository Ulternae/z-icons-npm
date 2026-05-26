import React from 'react';

export interface LanVialCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialCircleCheckSolid: React.FC<LanVialCircleCheckSolidProps>;
export default LanVialCircleCheckSolid;
