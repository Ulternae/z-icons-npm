import React from 'react';

export interface MinaLetterLSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterLSquareSolid: React.FC<MinaLetterLSquareSolidProps>;
export default MinaLetterLSquareSolid;
