import React from 'react';

export interface LanBowlingPinsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingPinsThin: React.FC<LanBowlingPinsThinProps>;
export default LanBowlingPinsThin;
