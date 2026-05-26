import React from 'react';

export interface LanCircleHalfHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalfHorizontalSolid: React.FC<LanCircleHalfHorizontalSolidProps>;
export default LanCircleHalfHorizontalSolid;
