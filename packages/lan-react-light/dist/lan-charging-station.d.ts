import React from 'react';

export interface LanChargingStationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChargingStation(props: LanChargingStationProps): React.ReactElement;
export default LanChargingStation;
