import React from 'react';

export interface MinaLetterDSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDSquareSolid: React.FC<MinaLetterDSquareSolidProps>;
export default MinaLetterDSquareSolid;
