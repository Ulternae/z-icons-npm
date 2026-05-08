import React from 'react';

export interface MinaCheckSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckSquareSolid: React.FC<MinaCheckSquareSolidProps>;
export default MinaCheckSquareSolid;
