import React from 'react';

export interface LanTruckFrontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFrontRegular: React.FC<LanTruckFrontRegularProps>;
export default LanTruckFrontRegular;
