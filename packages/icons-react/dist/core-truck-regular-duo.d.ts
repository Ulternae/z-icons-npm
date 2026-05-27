import React from 'react';

export interface CoreTruckRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTruckRegularDuo: React.FC<CoreTruckRegularDuoProps>;
export default CoreTruckRegularDuo;
