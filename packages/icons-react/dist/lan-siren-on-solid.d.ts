import React from 'react';

export interface LanSirenOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSirenOnSolid: React.FC<LanSirenOnSolidProps>;
export default LanSirenOnSolid;
