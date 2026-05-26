import React from 'react';

export interface LanEarthEuropeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthEuropeRegular: React.FC<LanEarthEuropeRegularProps>;
export default LanEarthEuropeRegular;
