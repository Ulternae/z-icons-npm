import React from 'react';

export interface LanTruckFastRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFastRegular: React.FC<LanTruckFastRegularProps>;
export default LanTruckFastRegular;
