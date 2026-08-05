import React from 'react';

export interface LanBasketballBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBasketballBallSolid(props: LanBasketballBallSolidProps): React.ReactElement;
export default LanBasketballBallSolid;
