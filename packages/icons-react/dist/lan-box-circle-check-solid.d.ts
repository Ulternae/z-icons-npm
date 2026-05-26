import React from 'react';

export interface LanBoxCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxCircleCheckSolid: React.FC<LanBoxCircleCheckSolidProps>;
export default LanBoxCircleCheckSolid;
