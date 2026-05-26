import React from 'react';

export interface LanRouteHighwaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouteHighwaySolid: React.FC<LanRouteHighwaySolidProps>;
export default LanRouteHighwaySolid;
