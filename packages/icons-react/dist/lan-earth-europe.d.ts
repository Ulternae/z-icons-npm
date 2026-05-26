import React from 'react';

export interface LanEarthEuropeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthEurope: React.FC<LanEarthEuropeProps>;
export default LanEarthEurope;
