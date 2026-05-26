import React from 'react';

export interface LanChargingStationRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChargingStationRegular: React.FC<LanChargingStationRegularProps>;
export default LanChargingStationRegular;
