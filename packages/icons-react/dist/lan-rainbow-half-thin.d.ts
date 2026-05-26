import React from 'react';

export interface LanRainbowHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRainbowHalfThin: React.FC<LanRainbowHalfThinProps>;
export default LanRainbowHalfThin;
