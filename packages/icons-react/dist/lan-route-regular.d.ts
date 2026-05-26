import React from 'react';

export interface LanRouteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouteRegular: React.FC<LanRouteRegularProps>;
export default LanRouteRegular;
