import React from 'react';

export interface NeoLaptopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLaptopRegularDuo: React.FC<NeoLaptopRegularDuoProps>;
export default NeoLaptopRegularDuo;
