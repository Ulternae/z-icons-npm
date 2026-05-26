import React from 'react';

export interface LanCancerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCancerSolid: React.FC<LanCancerSolidProps>;
export default LanCancerSolid;
