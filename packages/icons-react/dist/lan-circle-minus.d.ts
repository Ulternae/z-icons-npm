import React from 'react';

export interface LanCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMinus: React.FC<LanCircleMinusProps>;
export default LanCircleMinus;
