import React from 'react';

export interface LanBowlingBallPinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingBallPinThin: React.FC<LanBowlingBallPinThinProps>;
export default LanBowlingBallPinThin;
