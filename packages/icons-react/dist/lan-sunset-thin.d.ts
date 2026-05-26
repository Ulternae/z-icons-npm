import React from 'react';

export interface LanSunsetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunsetThin: React.FC<LanSunsetThinProps>;
export default LanSunsetThin;
