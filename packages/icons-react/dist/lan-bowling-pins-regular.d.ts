import React from 'react';

export interface LanBowlingPinsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingPinsRegular: React.FC<LanBowlingPinsRegularProps>;
export default LanBowlingPinsRegular;
