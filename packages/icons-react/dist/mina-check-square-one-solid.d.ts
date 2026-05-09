import React from 'react';

export interface MinaCheckSquareOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckSquareOneSolid: React.FC<MinaCheckSquareOneSolidProps>;
export default MinaCheckSquareOneSolid;
