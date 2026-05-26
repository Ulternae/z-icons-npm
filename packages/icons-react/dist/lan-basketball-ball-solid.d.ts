import React from 'react';

export interface LanBasketballBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketballBallSolid: React.FC<LanBasketballBallSolidProps>;
export default LanBasketballBallSolid;
