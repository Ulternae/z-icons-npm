import React from 'react';

export interface LanCarBusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBus(props: LanCarBusProps): React.ReactElement;
export default LanCarBus;
