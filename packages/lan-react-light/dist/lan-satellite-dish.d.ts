import React from 'react';

export interface LanSatelliteDishProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSatelliteDish(props: LanSatelliteDishProps): React.ReactElement;
export default LanSatelliteDish;
