import React from 'react';

export interface LanBowlingPinsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlingPinsSolid: React.FC<LanBowlingPinsSolidProps>;
export default LanBowlingPinsSolid;
