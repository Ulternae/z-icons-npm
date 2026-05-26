import React from 'react';

export interface LanCityThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCityThin: React.FC<LanCityThinProps>;
export default LanCityThin;
