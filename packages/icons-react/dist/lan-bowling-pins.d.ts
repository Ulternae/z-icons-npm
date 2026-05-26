import React from 'react';

export interface LanBowlingPinsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingPins: React.FC<LanBowlingPinsProps>;
export default LanBowlingPins;
