import React from 'react';

export interface MinaLetterGSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterGSquareSolid: React.FC<MinaLetterGSquareSolidProps>;
export default MinaLetterGSquareSolid;
