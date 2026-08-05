import React from 'react';

export interface LanBasketballBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBasketballBallThin(props: LanBasketballBallThinProps): React.ReactElement;
export default LanBasketballBallThin;
