import React from 'react';

export interface MinaSquareHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquareHalfSolid: React.FC<MinaSquareHalfSolidProps>;
export default MinaSquareHalfSolid;
