import React from 'react';

export interface LanRouteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoute(props: LanRouteProps): React.ReactElement;
export default LanRoute;
