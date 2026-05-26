import React from 'react';

export interface LanSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSun: React.FC<LanSunProps>;
export default LanSun;
