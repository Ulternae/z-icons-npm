import React from 'react';

export interface MinaLetterESquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterESquareSolid: React.FC<MinaLetterESquareSolidProps>;
export default MinaLetterESquareSolid;
