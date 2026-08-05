import React from 'react';

export interface LanBowlingBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingBallThin(props: LanBowlingBallThinProps): React.ReactElement;
export default LanBowlingBallThin;
