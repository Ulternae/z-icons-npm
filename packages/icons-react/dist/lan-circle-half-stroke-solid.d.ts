import React from 'react';

export interface LanCircleHalfStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalfStrokeSolid: React.FC<LanCircleHalfStrokeSolidProps>;
export default LanCircleHalfStrokeSolid;
