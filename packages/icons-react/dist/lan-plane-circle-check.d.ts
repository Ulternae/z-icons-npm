import React from 'react';

export interface LanPlaneCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneCircleCheck: React.FC<LanPlaneCircleCheckProps>;
export default LanPlaneCircleCheck;
