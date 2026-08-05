import React from 'react';

export interface LanBasketballBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBasketballBall(props: LanBasketballBallProps): React.ReactElement;
export default LanBasketballBall;
