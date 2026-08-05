import React from 'react';

export interface LanBasketballBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBasketballBallRegular(props: LanBasketballBallRegularProps): React.ReactElement;
export default LanBasketballBallRegular;
