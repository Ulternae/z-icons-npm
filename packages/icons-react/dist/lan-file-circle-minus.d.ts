import React from 'react';

export interface LanFileCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleMinus: React.FC<LanFileCircleMinusProps>;
export default LanFileCircleMinus;
