import React from 'react';

export interface MinaLetterBSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBSquareSolid: React.FC<MinaLetterBSquareSolidProps>;
export default MinaLetterBSquareSolid;
