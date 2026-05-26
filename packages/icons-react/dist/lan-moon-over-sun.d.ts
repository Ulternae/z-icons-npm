import React from 'react';

export interface LanMoonOverSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonOverSun: React.FC<LanMoonOverSunProps>;
export default LanMoonOverSun;
