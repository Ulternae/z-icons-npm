import React from 'react';

export interface LanBusStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusStop(props: LanBusStopProps): React.ReactElement;
export default LanBusStop;
