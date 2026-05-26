import React from 'react';

export interface LanRouterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouterThin: React.FC<LanRouterThinProps>;
export default LanRouterThin;
