import React from 'react';

export interface CoreLaptopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLaptop: React.FC<CoreLaptopProps>;
export default CoreLaptop;
