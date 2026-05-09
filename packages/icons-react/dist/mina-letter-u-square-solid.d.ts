import React from 'react';

export interface MinaLetterUSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUSquareSolid: React.FC<MinaLetterUSquareSolidProps>;
export default MinaLetterUSquareSolid;
