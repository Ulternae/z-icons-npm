import React from 'react';

export interface MinaLetterNSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNSquareSolid: React.FC<MinaLetterNSquareSolidProps>;
export default MinaLetterNSquareSolid;
