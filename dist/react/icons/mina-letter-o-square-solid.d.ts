import React from 'react';

export interface MinaLetterOSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterOSquareSolid: React.FC<MinaLetterOSquareSolidProps>;
export default MinaLetterOSquareSolid;
