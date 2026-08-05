import React from 'react';

export interface LanRouteInterstateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouteInterstateRegular(props: LanRouteInterstateRegularProps): React.ReactElement;
export default LanRouteInterstateRegular;
