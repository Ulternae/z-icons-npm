import React from 'react';

export interface LanSatelliteDishSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSatelliteDishSolid(props: LanSatelliteDishSolidProps): React.ReactElement;
export default LanSatelliteDishSolid;
