import React from 'react';

export interface LanDiamondHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamondHalfThin: React.FC<LanDiamondHalfThinProps>;
export default LanDiamondHalfThin;
