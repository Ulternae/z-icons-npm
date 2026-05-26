import React from 'react';

export interface LanHoseReelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoseReel: React.FC<LanHoseReelProps>;
export default LanHoseReel;
