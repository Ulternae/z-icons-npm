import React from 'react';

export interface LanBusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBus(props: LanBusProps): React.ReactElement;
export default LanBus;
