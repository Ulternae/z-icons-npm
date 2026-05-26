import React from 'react';

export interface LanHouseLaptopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseLaptop: React.FC<LanHouseLaptopProps>;
export default LanHouseLaptop;
