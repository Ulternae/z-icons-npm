import React from 'react';

export interface LanPersonCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleCheckSolid: React.FC<LanPersonCircleCheckSolidProps>;
export default LanPersonCircleCheckSolid;
