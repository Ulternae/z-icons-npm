import React from 'react';

export interface LanBowlingBallPinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingBallPinSolid: React.FC<LanBowlingBallPinSolidProps>;
export default LanBowlingBallPinSolid;
