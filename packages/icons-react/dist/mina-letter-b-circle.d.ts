import React from 'react';

export interface MinaLetterBCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBCircle: React.FC<MinaLetterBCircleProps>;
export default MinaLetterBCircle;
