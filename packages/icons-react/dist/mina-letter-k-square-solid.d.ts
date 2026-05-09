import React from 'react';

export interface MinaLetterKSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterKSquareSolid: React.FC<MinaLetterKSquareSolidProps>;
export default MinaLetterKSquareSolid;
