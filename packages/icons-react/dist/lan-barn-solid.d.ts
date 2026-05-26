import React from 'react';

export interface LanBarnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarnSolid: React.FC<LanBarnSolidProps>;
export default LanBarnSolid;
