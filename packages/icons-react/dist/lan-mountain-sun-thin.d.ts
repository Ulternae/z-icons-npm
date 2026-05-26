import React from 'react';

export interface LanMountainSunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainSunThin: React.FC<LanMountainSunThinProps>;
export default LanMountainSunThin;
