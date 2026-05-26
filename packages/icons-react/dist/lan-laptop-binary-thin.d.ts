import React from 'react';

export interface LanLaptopBinaryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopBinaryThin: React.FC<LanLaptopBinaryThinProps>;
export default LanLaptopBinaryThin;
