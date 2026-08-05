import React from 'react';

export interface LanRouteInterstateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouteInterstateSolid(props: LanRouteInterstateSolidProps): React.ReactElement;
export default LanRouteInterstateSolid;
