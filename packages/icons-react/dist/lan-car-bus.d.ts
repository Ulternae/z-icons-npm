import React from 'react';

export interface LanCarBusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBus: React.FC<LanCarBusProps>;
export default LanCarBus;
