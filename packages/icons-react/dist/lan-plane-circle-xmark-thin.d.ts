import React from 'react';

export interface LanPlaneCircleXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneCircleXmarkThin: React.FC<LanPlaneCircleXmarkThinProps>;
export default LanPlaneCircleXmarkThin;
