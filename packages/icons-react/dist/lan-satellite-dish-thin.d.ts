import React from 'react';

export interface LanSatelliteDishThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSatelliteDishThin: React.FC<LanSatelliteDishThinProps>;
export default LanSatelliteDishThin;
