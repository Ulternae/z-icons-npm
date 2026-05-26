import React from 'react';

export interface LanPlaneCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneCircleCheckThin: React.FC<LanPlaneCircleCheckThinProps>;
export default LanPlaneCircleCheckThin;
