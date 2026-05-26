import React from 'react';

export interface LanPowerOffThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPowerOffThin: React.FC<LanPowerOffThinProps>;
export default LanPowerOffThin;
