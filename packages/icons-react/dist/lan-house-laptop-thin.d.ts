import React from 'react';

export interface LanHouseLaptopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseLaptopThin: React.FC<LanHouseLaptopThinProps>;
export default LanHouseLaptopThin;
