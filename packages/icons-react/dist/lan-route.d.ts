import React from 'react';

export interface LanRouteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoute: React.FC<LanRouteProps>;
export default LanRoute;
