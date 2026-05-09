import React from 'react';

export interface MinaLetterCSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCSquareSolid: React.FC<MinaLetterCSquareSolidProps>;
export default MinaLetterCSquareSolid;
