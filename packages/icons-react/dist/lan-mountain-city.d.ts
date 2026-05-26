import React from 'react';

export interface LanMountainCityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainCity: React.FC<LanMountainCityProps>;
export default LanMountainCity;
