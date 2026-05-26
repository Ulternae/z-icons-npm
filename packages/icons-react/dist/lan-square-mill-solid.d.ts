import React from 'react';

export interface LanSquareMillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareMillSolid: React.FC<LanSquareMillSolidProps>;
export default LanSquareMillSolid;
