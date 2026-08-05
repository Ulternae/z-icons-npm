import React from 'react';

export interface LanBarsStaggeredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsStaggered(props: LanBarsStaggeredProps): React.ReactElement;
export default LanBarsStaggered;
