import React from 'react';

export interface LanChargingStationRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChargingStationRegular(props: LanChargingStationRegularProps): React.ReactElement;
export default LanChargingStationRegular;
