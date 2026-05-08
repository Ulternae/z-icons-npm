import React from 'react';

export interface MinaLetterVSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVSquareSolid: React.FC<MinaLetterVSquareSolidProps>;
export default MinaLetterVSquareSolid;
