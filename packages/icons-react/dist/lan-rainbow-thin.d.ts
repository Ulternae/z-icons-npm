import React from 'react';

export interface LanRainbowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRainbowThin: React.FC<LanRainbowThinProps>;
export default LanRainbowThin;
