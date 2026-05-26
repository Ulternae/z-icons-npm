import React from 'react';

export interface LanCircleHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHSolid: React.FC<LanCircleHSolidProps>;
export default LanCircleHSolid;
