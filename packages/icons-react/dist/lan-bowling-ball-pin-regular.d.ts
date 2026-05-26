import React from 'react';

export interface LanBowlingBallPinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingBallPinRegular: React.FC<LanBowlingBallPinRegularProps>;
export default LanBowlingBallPinRegular;
