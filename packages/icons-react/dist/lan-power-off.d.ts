import React from 'react';

export interface LanPowerOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPowerOff: React.FC<LanPowerOffProps>;
export default LanPowerOff;
