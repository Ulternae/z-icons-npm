import React from 'react';

export interface LanVialCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialCircleCheckThin: React.FC<LanVialCircleCheckThinProps>;
export default LanVialCircleCheckThin;
