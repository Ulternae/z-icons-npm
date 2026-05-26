import React from 'react';

export interface LanLaptopBinarySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopBinarySolid: React.FC<LanLaptopBinarySolidProps>;
export default LanLaptopBinarySolid;
