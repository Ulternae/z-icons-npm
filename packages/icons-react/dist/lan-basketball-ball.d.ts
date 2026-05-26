import React from 'react';

export interface LanBasketballBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketballBall: React.FC<LanBasketballBallProps>;
export default LanBasketballBall;
