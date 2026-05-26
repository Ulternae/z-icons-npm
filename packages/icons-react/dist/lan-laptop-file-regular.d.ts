import React from 'react';

export interface LanLaptopFileRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopFileRegular: React.FC<LanLaptopFileRegularProps>;
export default LanLaptopFileRegular;
