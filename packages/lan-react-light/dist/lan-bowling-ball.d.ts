import React from 'react';

export interface LanBowlingBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingBall(props: LanBowlingBallProps): React.ReactElement;
export default LanBowlingBall;
