import React from 'react';

export interface LanCabinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCabinSolid: React.FC<LanCabinSolidProps>;
export default LanCabinSolid;
