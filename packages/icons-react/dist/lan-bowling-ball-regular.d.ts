import React from 'react';

export interface LanBowlingBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingBallRegular: React.FC<LanBowlingBallRegularProps>;
export default LanBowlingBallRegular;
