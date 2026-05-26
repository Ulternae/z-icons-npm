import React from 'react';

export interface LanBasketballBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketballBallRegular: React.FC<LanBasketballBallRegularProps>;
export default LanBasketballBallRegular;
