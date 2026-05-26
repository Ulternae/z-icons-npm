import React from 'react';

export interface LanTreeCityRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeCityRegular: React.FC<LanTreeCityRegularProps>;
export default LanTreeCityRegular;
