import React from 'react';

export interface MinaLetterMSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMSquareSolid: React.FC<MinaLetterMSquareSolidProps>;
export default MinaLetterMSquareSolid;
