import React from 'react';

export interface MinaLetterPSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPSquareSolid: React.FC<MinaLetterPSquareSolidProps>;
export default MinaLetterPSquareSolid;
