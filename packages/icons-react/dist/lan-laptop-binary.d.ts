import React from 'react';

export interface LanLaptopBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopBinary: React.FC<LanLaptopBinaryProps>;
export default LanLaptopBinary;
