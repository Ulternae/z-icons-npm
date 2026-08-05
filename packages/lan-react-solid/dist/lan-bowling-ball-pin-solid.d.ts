import React from 'react';

export interface LanBowlingBallPinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingBallPinSolid(props: LanBowlingBallPinSolidProps): React.ReactElement;
export default LanBowlingBallPinSolid;
