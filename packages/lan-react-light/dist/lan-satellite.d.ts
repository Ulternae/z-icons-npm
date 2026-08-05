import React from 'react';

export interface LanSatelliteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSatellite(props: LanSatelliteProps): React.ReactElement;
export default LanSatellite;
