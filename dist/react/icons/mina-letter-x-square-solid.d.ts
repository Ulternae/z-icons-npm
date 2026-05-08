import React from 'react';

export interface MinaLetterXSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterXSquareSolid: React.FC<MinaLetterXSquareSolidProps>;
export default MinaLetterXSquareSolid;
