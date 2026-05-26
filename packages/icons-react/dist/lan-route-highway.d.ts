import React from 'react';

export interface LanRouteHighwayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouteHighway: React.FC<LanRouteHighwayProps>;
export default LanRouteHighway;
