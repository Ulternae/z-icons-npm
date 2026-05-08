import React from 'react';

export interface MinaBookMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookMinus: React.FC<MinaBookMinusProps>;
export default MinaBookMinus;
