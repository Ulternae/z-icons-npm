import React from 'react';

export interface LanLaptopCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopCodeRegular: React.FC<LanLaptopCodeRegularProps>;
export default LanLaptopCodeRegular;
