import React from 'react';

export interface LanBusStopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusStopThin(props: LanBusStopThinProps): React.ReactElement;
export default LanBusStopThin;
