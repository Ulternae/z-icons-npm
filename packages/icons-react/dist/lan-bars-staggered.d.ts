import React from 'react';

export interface LanBarsStaggeredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsStaggered: React.FC<LanBarsStaggeredProps>;
export default LanBarsStaggered;
