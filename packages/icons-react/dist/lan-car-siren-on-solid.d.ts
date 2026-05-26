import React from 'react';

export interface LanCarSirenOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSirenOnSolid: React.FC<LanCarSirenOnSolidProps>;
export default LanCarSirenOnSolid;
