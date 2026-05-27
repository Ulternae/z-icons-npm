import React from 'react';

export interface CoreLaptopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLaptopRegularDuo: React.FC<CoreLaptopRegularDuoProps>;
export default CoreLaptopRegularDuo;
