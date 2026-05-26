import React from 'react';

export interface LanSandwichSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSandwichSolid: React.FC<LanSandwichSolidProps>;
export default LanSandwichSolid;
