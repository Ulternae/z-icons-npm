import React from 'react';

export interface LanMoonOverSunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonOverSunThin: React.FC<LanMoonOverSunThinProps>;
export default LanMoonOverSunThin;
