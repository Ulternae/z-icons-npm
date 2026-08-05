import React from 'react';

export interface LanBowlingBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingBallSolid(props: LanBowlingBallSolidProps): React.ReactElement;
export default LanBowlingBallSolid;
