import React from 'react';

export interface MinaLetterACircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterACircle: React.FC<MinaLetterACircleProps>;
export default MinaLetterACircle;
