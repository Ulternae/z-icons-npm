import React from 'react';

export interface LanEarthAmericaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthAmericaRegular: React.FC<LanEarthAmericaRegularProps>;
export default LanEarthAmericaRegular;
