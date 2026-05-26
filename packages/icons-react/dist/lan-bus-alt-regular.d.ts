import React from 'react';

export interface LanBusAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusAltRegular: React.FC<LanBusAltRegularProps>;
export default LanBusAltRegular;
