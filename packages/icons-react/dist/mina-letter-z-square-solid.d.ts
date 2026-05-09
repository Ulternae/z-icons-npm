import React from 'react';

export interface MinaLetterZSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZSquareSolid: React.FC<MinaLetterZSquareSolidProps>;
export default MinaLetterZSquareSolid;
