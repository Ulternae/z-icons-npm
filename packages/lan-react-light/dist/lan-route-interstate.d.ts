import React from 'react';

export interface LanRouteInterstateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouteInterstate(props: LanRouteInterstateProps): React.ReactElement;
export default LanRouteInterstate;
