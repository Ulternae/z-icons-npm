import React from 'react';

export interface LanChargingStationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChargingStationSolid: React.FC<LanChargingStationSolidProps>;
export default LanChargingStationSolid;
