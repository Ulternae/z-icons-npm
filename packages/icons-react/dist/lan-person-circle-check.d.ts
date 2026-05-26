import React from 'react';

export interface LanPersonCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleCheck: React.FC<LanPersonCircleCheckProps>;
export default LanPersonCircleCheck;
