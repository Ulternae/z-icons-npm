import React from 'react';

export interface LanCabinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCabin: React.FC<LanCabinProps>;
export default LanCabin;
