import React from 'react';

export interface MinaLetterISquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterISquareSolid: React.FC<MinaLetterISquareSolidProps>;
export default MinaLetterISquareSolid;
