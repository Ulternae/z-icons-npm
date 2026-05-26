import React from 'react';

export interface LanBowlingBallPinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingBallPin: React.FC<LanBowlingBallPinProps>;
export default LanBowlingBallPin;
