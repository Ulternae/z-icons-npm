import React from 'react';

export interface LanChargingStationThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChargingStationThin(props: LanChargingStationThinProps): React.ReactElement;
export default LanChargingStationThin;
