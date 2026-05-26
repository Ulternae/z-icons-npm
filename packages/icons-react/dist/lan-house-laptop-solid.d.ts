import React from 'react';

export interface LanHouseLaptopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseLaptopSolid: React.FC<LanHouseLaptopSolidProps>;
export default LanHouseLaptopSolid;
