import React from 'react';

export interface LanChargingStationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChargingStationSolid(props: LanChargingStationSolidProps): React.ReactElement;
export default LanChargingStationSolid;
