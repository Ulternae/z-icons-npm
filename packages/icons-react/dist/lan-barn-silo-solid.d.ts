import React from 'react';

export interface LanBarnSiloSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarnSiloSolid: React.FC<LanBarnSiloSolidProps>;
export default LanBarnSiloSolid;
