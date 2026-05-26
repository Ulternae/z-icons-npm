import React from 'react';

export interface LanCabSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCabSolid: React.FC<LanCabSolidProps>;
export default LanCabSolid;
