import React from 'react';

export interface LanMemoCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoCircleCheckThin: React.FC<LanMemoCircleCheckThinProps>;
export default LanMemoCircleCheckThin;
