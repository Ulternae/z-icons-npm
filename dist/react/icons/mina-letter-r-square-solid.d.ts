import React from 'react';

export interface MinaLetterRSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterRSquareSolid: React.FC<MinaLetterRSquareSolidProps>;
export default MinaLetterRSquareSolid;
