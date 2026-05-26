import React from 'react';

export interface LanEarthAmericaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthAmerica: React.FC<LanEarthAmericaProps>;
export default LanEarthAmerica;
