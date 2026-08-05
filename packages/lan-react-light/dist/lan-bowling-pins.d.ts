import React from 'react';

export interface LanBowlingPinsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingPins(props: LanBowlingPinsProps): React.ReactElement;
export default LanBowlingPins;
