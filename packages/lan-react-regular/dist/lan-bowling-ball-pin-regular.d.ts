import React from 'react';

export interface LanBowlingBallPinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingBallPinRegular(props: LanBowlingBallPinRegularProps): React.ReactElement;
export default LanBowlingBallPinRegular;
