import React from 'react';

export interface LanRouteHighwayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouteHighwayRegular(props: LanRouteHighwayRegularProps): React.ReactElement;
export default LanRouteHighwayRegular;
