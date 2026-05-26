import React from 'react';

export interface LanCityRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCityRegular: React.FC<LanCityRegularProps>;
export default LanCityRegular;
