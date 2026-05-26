import React from 'react';

export interface LanSatelliteDishRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSatelliteDishRegular: React.FC<LanSatelliteDishRegularProps>;
export default LanSatelliteDishRegular;
