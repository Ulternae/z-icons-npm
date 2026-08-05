import React from 'react';

export interface LanBarsStaggeredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsStaggeredSolid(props: LanBarsStaggeredSolidProps): React.ReactElement;
export default LanBarsStaggeredSolid;
