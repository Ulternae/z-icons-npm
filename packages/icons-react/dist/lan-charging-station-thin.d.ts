import React from 'react';

export interface LanChargingStationThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChargingStationThin: React.FC<LanChargingStationThinProps>;
export default LanChargingStationThin;
