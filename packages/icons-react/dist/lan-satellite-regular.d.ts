import React from 'react';

export interface LanSatelliteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSatelliteRegular: React.FC<LanSatelliteRegularProps>;
export default LanSatelliteRegular;
