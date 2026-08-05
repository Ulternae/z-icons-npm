import React from 'react';

export interface LanBowlingBallPinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingBallPinThin(props: LanBowlingBallPinThinProps): React.ReactElement;
export default LanBowlingBallPinThin;
