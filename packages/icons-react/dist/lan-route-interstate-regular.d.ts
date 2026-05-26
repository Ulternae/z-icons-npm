import React from 'react';

export interface LanRouteInterstateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouteInterstateRegular: React.FC<LanRouteInterstateRegularProps>;
export default LanRouteInterstateRegular;
