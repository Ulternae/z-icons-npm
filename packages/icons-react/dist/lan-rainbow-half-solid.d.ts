import React from 'react';

export interface LanRainbowHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRainbowHalfSolid: React.FC<LanRainbowHalfSolidProps>;
export default LanRainbowHalfSolid;
