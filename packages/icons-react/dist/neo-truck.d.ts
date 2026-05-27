import React from 'react';

export interface NeoTruckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTruck: React.FC<NeoTruckProps>;
export default NeoTruck;
