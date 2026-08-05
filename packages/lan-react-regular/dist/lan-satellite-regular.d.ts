import React from 'react';

export interface LanSatelliteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSatelliteRegular(props: LanSatelliteRegularProps): React.ReactElement;
export default LanSatelliteRegular;
