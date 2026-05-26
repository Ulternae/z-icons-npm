import React from 'react';

export interface LanMountainCityThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainCityThin: React.FC<LanMountainCityThinProps>;
export default LanMountainCityThin;
