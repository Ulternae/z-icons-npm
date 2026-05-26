import React from 'react';

export interface LanLaptopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopSolid: React.FC<LanLaptopSolidProps>;
export default LanLaptopSolid;
