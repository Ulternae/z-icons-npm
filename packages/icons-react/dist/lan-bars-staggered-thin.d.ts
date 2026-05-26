import React from 'react';

export interface LanBarsStaggeredThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsStaggeredThin: React.FC<LanBarsStaggeredThinProps>;
export default LanBarsStaggeredThin;
