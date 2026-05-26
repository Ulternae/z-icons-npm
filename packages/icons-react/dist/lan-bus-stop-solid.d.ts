import React from 'react';

export interface LanBusStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusStopSolid: React.FC<LanBusStopSolidProps>;
export default LanBusStopSolid;
