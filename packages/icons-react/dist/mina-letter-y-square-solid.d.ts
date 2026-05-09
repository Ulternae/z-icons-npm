import React from 'react';

export interface MinaLetterYSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterYSquareSolid: React.FC<MinaLetterYSquareSolidProps>;
export default MinaLetterYSquareSolid;
