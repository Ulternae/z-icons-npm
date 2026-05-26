import React from 'react';

export interface LanTruckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckRegular: React.FC<LanTruckRegularProps>;
export default LanTruckRegular;
