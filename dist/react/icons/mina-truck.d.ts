import React from 'react';

export interface MinaTruckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTruck: React.FC<MinaTruckProps>;
export default MinaTruck;
