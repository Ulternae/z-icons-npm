import React from 'react';

export interface LanDroneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDroneRegular: React.FC<LanDroneRegularProps>;
export default LanDroneRegular;
