import React from 'react';

export interface LanBusStopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusStopRegular(props: LanBusStopRegularProps): React.ReactElement;
export default LanBusStopRegular;
