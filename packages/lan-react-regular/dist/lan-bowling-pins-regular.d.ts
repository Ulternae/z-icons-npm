import React from 'react';

export interface LanBowlingPinsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingPinsRegular(props: LanBowlingPinsRegularProps): React.ReactElement;
export default LanBowlingPinsRegular;
