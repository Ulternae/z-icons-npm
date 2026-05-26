import React from 'react';

export interface LanPlugCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCircleCheckThin: React.FC<LanPlugCircleCheckThinProps>;
export default LanPlugCircleCheckThin;
