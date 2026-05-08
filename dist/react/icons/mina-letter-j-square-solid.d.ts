import React from 'react';

export interface MinaLetterJSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJSquareSolid: React.FC<MinaLetterJSquareSolidProps>;
export default MinaLetterJSquareSolid;
