import React from 'react';

export interface LanSwapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwap: React.FC<LanSwapProps>;
export default LanSwap;
