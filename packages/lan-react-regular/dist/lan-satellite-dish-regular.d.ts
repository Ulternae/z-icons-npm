import React from 'react';

export interface LanSatelliteDishRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSatelliteDishRegular(props: LanSatelliteDishRegularProps): React.ReactElement;
export default LanSatelliteDishRegular;
