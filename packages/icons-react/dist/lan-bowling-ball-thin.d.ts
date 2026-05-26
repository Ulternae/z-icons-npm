import React from 'react';

export interface LanBowlingBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingBallThin: React.FC<LanBowlingBallThinProps>;
export default LanBowlingBallThin;
