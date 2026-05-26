import React from 'react';

export interface LanBarsStaggeredRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsStaggeredRegular: React.FC<LanBarsStaggeredRegularProps>;
export default LanBarsStaggeredRegular;
