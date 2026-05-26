import React from 'react';

export interface LanStarHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarHalf: React.FC<LanStarHalfProps>;
export default LanStarHalf;
