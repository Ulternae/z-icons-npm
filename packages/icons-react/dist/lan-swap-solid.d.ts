import React from 'react';

export interface LanSwapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwapSolid: React.FC<LanSwapSolidProps>;
export default LanSwapSolid;
