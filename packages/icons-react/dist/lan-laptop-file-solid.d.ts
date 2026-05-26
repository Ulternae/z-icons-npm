import React from 'react';

export interface LanLaptopFileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopFileSolid: React.FC<LanLaptopFileSolidProps>;
export default LanLaptopFileSolid;
