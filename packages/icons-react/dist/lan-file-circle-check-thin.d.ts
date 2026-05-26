import React from 'react';

export interface LanFileCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleCheckThin: React.FC<LanFileCircleCheckThinProps>;
export default LanFileCircleCheckThin;
