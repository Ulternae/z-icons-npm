import React from 'react';

export interface MinaMoveDiagonalOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoveDiagonalOneSolid: React.FC<MinaMoveDiagonalOneSolidProps>;
export default MinaMoveDiagonalOneSolid;
