import React from 'react';

export interface LanLaptopCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopCode: React.FC<LanLaptopCodeProps>;
export default LanLaptopCode;
