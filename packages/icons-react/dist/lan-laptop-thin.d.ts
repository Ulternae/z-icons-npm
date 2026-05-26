import React from 'react';

export interface LanLaptopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopThin: React.FC<LanLaptopThinProps>;
export default LanLaptopThin;
