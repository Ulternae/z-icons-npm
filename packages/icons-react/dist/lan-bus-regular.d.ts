import React from 'react';

export interface LanBusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusRegular: React.FC<LanBusRegularProps>;
export default LanBusRegular;
