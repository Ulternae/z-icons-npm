import React from 'react';

export interface LanIceCreamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIceCreamRegular(props: LanIceCreamRegularProps): React.ReactElement;
export default LanIceCreamRegular;
