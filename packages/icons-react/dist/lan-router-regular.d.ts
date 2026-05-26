import React from 'react';

export interface LanRouterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouterRegular: React.FC<LanRouterRegularProps>;
export default LanRouterRegular;
