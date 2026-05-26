import React from 'react';

export interface LanSatelliteDishSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSatelliteDishSolid: React.FC<LanSatelliteDishSolidProps>;
export default LanSatelliteDishSolid;
