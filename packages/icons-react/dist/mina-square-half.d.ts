import React from 'react';

export interface MinaSquareHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquareHalf: React.FC<MinaSquareHalfProps>;
export default MinaSquareHalf;
