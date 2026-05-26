import React from 'react';

export interface LanCircleKSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleKSolid: React.FC<LanCircleKSolidProps>;
export default LanCircleKSolid;
