import React from 'react';

export interface LanPlugCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCircleCheckSolid: React.FC<LanPlugCircleCheckSolidProps>;
export default LanPlugCircleCheckSolid;
