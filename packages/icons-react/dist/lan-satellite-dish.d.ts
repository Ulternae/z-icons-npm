import React from 'react';

export interface LanSatelliteDishProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSatelliteDish: React.FC<LanSatelliteDishProps>;
export default LanSatelliteDish;
