import React from 'react';

export interface LanBallPileRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallPileRegular: React.FC<LanBallPileRegularProps>;
export default LanBallPileRegular;
