import React from 'react';

export interface LanBusStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusStopSolid(props: LanBusStopSolidProps): React.ReactElement;
export default LanBusStopSolid;
