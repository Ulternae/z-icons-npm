import React from 'react';

export interface LanLaptopCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopCodeThin: React.FC<LanLaptopCodeThinProps>;
export default LanLaptopCodeThin;
