import React from 'react';

export interface LanEarthOceaniaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthOceaniaRegular: React.FC<LanEarthOceaniaRegularProps>;
export default LanEarthOceaniaRegular;
