import React from 'react';

export interface MinaLetterSSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSSquareSolid: React.FC<MinaLetterSSquareSolidProps>;
export default MinaLetterSSquareSolid;
