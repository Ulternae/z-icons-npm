import React from 'react';

export interface LanSunDustThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunDustThin: React.FC<LanSunDustThinProps>;
export default LanSunDustThin;
