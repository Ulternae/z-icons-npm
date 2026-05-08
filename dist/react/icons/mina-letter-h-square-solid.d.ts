import React from 'react';

export interface MinaLetterHSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHSquareSolid: React.FC<MinaLetterHSquareSolidProps>;
export default MinaLetterHSquareSolid;
