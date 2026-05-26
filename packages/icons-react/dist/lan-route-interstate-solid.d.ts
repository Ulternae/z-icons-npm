import React from 'react';

export interface LanRouteInterstateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouteInterstateSolid: React.FC<LanRouteInterstateSolidProps>;
export default LanRouteInterstateSolid;
