import React from 'react';

export interface LanSatelliteDishThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSatelliteDishThin(props: LanSatelliteDishThinProps): React.ReactElement;
export default LanSatelliteDishThin;
