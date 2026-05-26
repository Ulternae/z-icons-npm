import React from 'react';

export interface LanRouteHighwayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouteHighwayThin: React.FC<LanRouteHighwayThinProps>;
export default LanRouteHighwayThin;
