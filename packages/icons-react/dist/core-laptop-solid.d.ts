import React from 'react';

export interface CoreLaptopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLaptopSolid: React.FC<CoreLaptopSolidProps>;
export default CoreLaptopSolid;
