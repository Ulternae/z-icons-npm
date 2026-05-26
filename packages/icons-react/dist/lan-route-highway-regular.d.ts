import React from 'react';

export interface LanRouteHighwayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouteHighwayRegular: React.FC<LanRouteHighwayRegularProps>;
export default LanRouteHighwayRegular;
