import React from 'react';

export interface LanDiamondHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamondHalf: React.FC<LanDiamondHalfProps>;
export default LanDiamondHalf;
