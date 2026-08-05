import React from 'react';

export interface LanBarsStaggeredRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsStaggeredRegular(props: LanBarsStaggeredRegularProps): React.ReactElement;
export default LanBarsStaggeredRegular;
