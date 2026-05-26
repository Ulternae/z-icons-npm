import React from 'react';

export interface LanRouterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouterSolid: React.FC<LanRouterSolidProps>;
export default LanRouterSolid;
