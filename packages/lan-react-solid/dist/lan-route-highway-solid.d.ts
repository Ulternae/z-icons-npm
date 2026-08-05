import React from 'react';

export interface LanRouteHighwaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouteHighwaySolid(props: LanRouteHighwaySolidProps): React.ReactElement;
export default LanRouteHighwaySolid;
