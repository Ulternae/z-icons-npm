import React from 'react';

export interface LanBusStopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusStopRegular: React.FC<LanBusStopRegularProps>;
export default LanBusStopRegular;
