import React from 'react';

export interface LanPlugCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCircleMinus: React.FC<LanPlugCircleMinusProps>;
export default LanPlugCircleMinus;
