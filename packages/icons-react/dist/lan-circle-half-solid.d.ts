import React from 'react';

export interface LanCircleHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalfSolid: React.FC<LanCircleHalfSolidProps>;
export default LanCircleHalfSolid;
