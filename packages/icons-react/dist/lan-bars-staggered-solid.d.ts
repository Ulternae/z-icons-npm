import React from 'react';

export interface LanBarsStaggeredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsStaggeredSolid: React.FC<LanBarsStaggeredSolidProps>;
export default LanBarsStaggeredSolid;
