import React from 'react';

export interface MinaLetterNCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNCircle: React.FC<MinaLetterNCircleProps>;
export default MinaLetterNCircle;
