import React from 'react';

export interface MinaMoveDiagonalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoveDiagonalSolid: React.FC<MinaMoveDiagonalSolidProps>;
export default MinaMoveDiagonalSolid;
