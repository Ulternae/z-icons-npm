import React from 'react';

export interface LanTruckFieldUnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFieldUnRegular: React.FC<LanTruckFieldUnRegularProps>;
export default LanTruckFieldUnRegular;
