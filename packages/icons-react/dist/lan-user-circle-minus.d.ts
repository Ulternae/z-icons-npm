import React from 'react';

export interface LanUserCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCircleMinus: React.FC<LanUserCircleMinusProps>;
export default LanUserCircleMinus;
