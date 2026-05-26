import React from 'react';

export interface LanReelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReel: React.FC<LanReelProps>;
export default LanReel;
