import React from 'react';

export interface LanRouteInterstateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouteInterstate: React.FC<LanRouteInterstateProps>;
export default LanRouteInterstate;
