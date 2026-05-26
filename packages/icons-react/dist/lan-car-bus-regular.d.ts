import React from 'react';

export interface LanCarBusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBusRegular: React.FC<LanCarBusRegularProps>;
export default LanCarBusRegular;
