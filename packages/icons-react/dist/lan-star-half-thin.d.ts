import React from 'react';

export interface LanStarHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarHalfThin: React.FC<LanStarHalfThinProps>;
export default LanStarHalfThin;
