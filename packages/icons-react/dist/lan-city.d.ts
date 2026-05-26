import React from 'react';

export interface LanCityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCity: React.FC<LanCityProps>;
export default LanCity;
