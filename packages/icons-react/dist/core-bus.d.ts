import React from 'react';

export interface CoreBusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBus: React.FC<CoreBusProps>;
export default CoreBus;
