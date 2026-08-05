import React from 'react';

export interface LanRouteHighwayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouteHighwayThin(props: LanRouteHighwayThinProps): React.ReactElement;
export default LanRouteHighwayThin;
