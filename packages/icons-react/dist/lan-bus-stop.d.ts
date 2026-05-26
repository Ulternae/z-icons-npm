import React from 'react';

export interface LanBusStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusStop: React.FC<LanBusStopProps>;
export default LanBusStop;
