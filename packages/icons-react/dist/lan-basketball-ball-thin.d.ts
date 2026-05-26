import React from 'react';

export interface LanBasketballBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketballBallThin: React.FC<LanBasketballBallThinProps>;
export default LanBasketballBallThin;
