import React from 'react';

export interface LanBowlingBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingBall: React.FC<LanBowlingBallProps>;
export default LanBowlingBall;
