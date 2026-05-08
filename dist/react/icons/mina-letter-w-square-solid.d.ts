import React from 'react';

export interface MinaLetterWSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterWSquareSolid: React.FC<MinaLetterWSquareSolidProps>;
export default MinaLetterWSquareSolid;
