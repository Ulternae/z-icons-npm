import React from 'react';

export interface LanBowlingPinsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingPinsThin(props: LanBowlingPinsThinProps): React.ReactElement;
export default LanBowlingPinsThin;
