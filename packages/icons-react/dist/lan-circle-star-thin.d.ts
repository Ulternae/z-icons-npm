import React from 'react';

export interface LanCircleStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleStarThin: React.FC<LanCircleStarThinProps>;
export default LanCircleStarThin;
