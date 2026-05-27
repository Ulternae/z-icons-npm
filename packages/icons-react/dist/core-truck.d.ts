import React from 'react';

export interface CoreTruckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTruck: React.FC<CoreTruckProps>;
export default CoreTruck;
