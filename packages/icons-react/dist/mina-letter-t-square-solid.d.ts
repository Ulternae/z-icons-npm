import React from 'react';

export interface MinaLetterTSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTSquareSolid: React.FC<MinaLetterTSquareSolidProps>;
export default MinaLetterTSquareSolid;
