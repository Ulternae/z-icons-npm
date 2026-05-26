import React from 'react';

export interface LanSquareZSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareZSolid: React.FC<LanSquareZSolidProps>;
export default LanSquareZSolid;
