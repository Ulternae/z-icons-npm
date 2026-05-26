import React from 'react';

export interface LanPersonCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleMinus: React.FC<LanPersonCircleMinusProps>;
export default LanPersonCircleMinus;
