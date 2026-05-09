import React from 'react';

export interface MinaLetterCCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCCircle: React.FC<MinaLetterCCircleProps>;
export default MinaLetterCCircle;
