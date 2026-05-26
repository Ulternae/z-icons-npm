import React from 'react';

export interface LanSquareKSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareKSolid: React.FC<LanSquareKSolidProps>;
export default LanSquareKSolid;
