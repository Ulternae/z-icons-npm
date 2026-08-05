import React from 'react';

export interface LanBowlingBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingBallRegular(props: LanBowlingBallRegularProps): React.ReactElement;
export default LanBowlingBallRegular;
