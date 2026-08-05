import React from 'react';

export interface LanSatelliteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSatelliteSolid(props: LanSatelliteSolidProps): React.ReactElement;
export default LanSatelliteSolid;
