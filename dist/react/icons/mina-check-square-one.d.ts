import React from 'react';

export interface MinaCheckSquareOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckSquareOne: React.FC<MinaCheckSquareOneProps>;
export default MinaCheckSquareOne;
