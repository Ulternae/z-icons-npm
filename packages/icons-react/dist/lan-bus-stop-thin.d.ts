import React from 'react';

export interface LanBusStopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusStopThin: React.FC<LanBusStopThinProps>;
export default LanBusStopThin;
