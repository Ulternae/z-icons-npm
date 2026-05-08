import React from 'react';

export interface MinaLetterQSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterQSquareSolid: React.FC<MinaLetterQSquareSolidProps>;
export default MinaLetterQSquareSolid;
