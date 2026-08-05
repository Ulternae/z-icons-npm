import React from 'react';

export interface LanSatelliteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSatelliteThin(props: LanSatelliteThinProps): React.ReactElement;
export default LanSatelliteThin;
