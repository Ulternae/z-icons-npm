import React from 'react';

export interface LanHouseLaptopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseLaptopRegular: React.FC<LanHouseLaptopRegularProps>;
export default LanHouseLaptopRegular;
