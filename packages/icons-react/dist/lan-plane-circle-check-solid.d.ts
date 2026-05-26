import React from 'react';

export interface LanPlaneCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneCircleCheckSolid: React.FC<LanPlaneCircleCheckSolidProps>;
export default LanPlaneCircleCheckSolid;
