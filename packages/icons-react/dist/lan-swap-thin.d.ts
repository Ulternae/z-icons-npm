import React from 'react';

export interface LanSwapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwapThin: React.FC<LanSwapThinProps>;
export default LanSwapThin;
