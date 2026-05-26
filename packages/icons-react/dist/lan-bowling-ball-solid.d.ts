import React from 'react';

export interface LanBowlingBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingBallSolid: React.FC<LanBowlingBallSolidProps>;
export default LanBowlingBallSolid;
