import React from 'react';

export interface LanMountainSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainSun: React.FC<LanMountainSunProps>;
export default LanMountainSun;
