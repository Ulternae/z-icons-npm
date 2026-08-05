import React from 'react';

export interface LanRouterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouterSolid(props: LanRouterSolidProps): React.ReactElement;
export default LanRouterSolid;
