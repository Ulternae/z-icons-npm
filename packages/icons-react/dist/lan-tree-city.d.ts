import React from 'react';

export interface LanTreeCityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeCity: React.FC<LanTreeCityProps>;
export default LanTreeCity;
