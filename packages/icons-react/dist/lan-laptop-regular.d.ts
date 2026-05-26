import React from 'react';

export interface LanLaptopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopRegular: React.FC<LanLaptopRegularProps>;
export default LanLaptopRegular;
