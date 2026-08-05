import React from 'react';

export interface LanRouteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouteRegular(props: LanRouteRegularProps): React.ReactElement;
export default LanRouteRegular;
