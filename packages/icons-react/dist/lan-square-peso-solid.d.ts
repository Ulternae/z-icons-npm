import React from 'react';

export interface LanSquarePesoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePesoSolid: React.FC<LanSquarePesoSolidProps>;
export default LanSquarePesoSolid;
