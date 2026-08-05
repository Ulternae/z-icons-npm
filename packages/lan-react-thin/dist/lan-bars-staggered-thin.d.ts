import React from 'react';

export interface LanBarsStaggeredThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsStaggeredThin(props: LanBarsStaggeredThinProps): React.ReactElement;
export default LanBarsStaggeredThin;
