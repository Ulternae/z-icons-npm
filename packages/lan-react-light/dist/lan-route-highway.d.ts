import React from 'react';

export interface LanRouteHighwayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouteHighway(props: LanRouteHighwayProps): React.ReactElement;
export default LanRouteHighway;
