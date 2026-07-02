import React from 'react';

export interface CoreBusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBus(props: CoreBusProps): React.ReactElement;
export default CoreBus;
