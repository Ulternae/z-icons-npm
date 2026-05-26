import React from 'react';

export interface LanTruckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruck: React.FC<LanTruckProps>;
export default LanTruck;
