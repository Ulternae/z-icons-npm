import React from 'react';

export interface MinaLetterASquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterASquareSolid: React.FC<MinaLetterASquareSolidProps>;
export default MinaLetterASquareSolid;
