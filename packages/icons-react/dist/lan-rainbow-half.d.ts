import React from 'react';

export interface LanRainbowHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRainbowHalf: React.FC<LanRainbowHalfProps>;
export default LanRainbowHalf;
