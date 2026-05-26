import React from 'react';

export interface LanChargingStationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChargingStation: React.FC<LanChargingStationProps>;
export default LanChargingStation;
