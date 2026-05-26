import React from 'react';

export interface LanLaptopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptop: React.FC<LanLaptopProps>;
export default LanLaptop;
