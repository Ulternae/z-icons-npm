import React from 'react';

export interface LanRainbowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRainbowSolid: React.FC<LanRainbowSolidProps>;
export default LanRainbowSolid;
