import React from 'react';

export interface LanSunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunThin: React.FC<LanSunThinProps>;
export default LanSunThin;
