import React from 'react';

export interface MinaMoveDiagonalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoveDiagonal: React.FC<MinaMoveDiagonalProps>;
export default MinaMoveDiagonal;
