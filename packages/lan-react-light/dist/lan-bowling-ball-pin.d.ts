import React from 'react';

export interface LanBowlingBallPinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingBallPin(props: LanBowlingBallPinProps): React.ReactElement;
export default LanBowlingBallPin;
