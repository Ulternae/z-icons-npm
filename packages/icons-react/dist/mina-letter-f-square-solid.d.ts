import React from 'react';

export interface MinaLetterFSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterFSquareSolid: React.FC<MinaLetterFSquareSolidProps>;
export default MinaLetterFSquareSolid;
