import React from 'react';

export interface LanFileCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleCheckSolid: React.FC<LanFileCircleCheckSolidProps>;
export default LanFileCircleCheckSolid;
