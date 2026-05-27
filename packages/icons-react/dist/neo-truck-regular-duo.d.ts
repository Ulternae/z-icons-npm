import React from 'react';

export interface NeoTruckRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTruckRegularDuo: React.FC<NeoTruckRegularDuoProps>;
export default NeoTruckRegularDuo;
