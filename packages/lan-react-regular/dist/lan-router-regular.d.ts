import React from 'react';

export interface LanRouterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouterRegular(props: LanRouterRegularProps): React.ReactElement;
export default LanRouterRegular;
