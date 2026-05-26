import React from 'react';

export interface LanRouterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouter: React.FC<LanRouterProps>;
export default LanRouter;
