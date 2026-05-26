import React from 'react';

export interface LanMemoCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoCircleCheckSolid: React.FC<LanMemoCircleCheckSolidProps>;
export default LanMemoCircleCheckSolid;
