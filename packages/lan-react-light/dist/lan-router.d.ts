import React from 'react';

export interface LanRouterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouter(props: LanRouterProps): React.ReactElement;
export default LanRouter;
