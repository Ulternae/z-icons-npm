import React from 'react';

export interface LanSquareListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareListSolid: React.FC<LanSquareListSolidProps>;
export default LanSquareListSolid;
