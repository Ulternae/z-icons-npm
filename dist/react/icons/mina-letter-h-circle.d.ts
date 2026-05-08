import React from 'react';

export interface MinaLetterHCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHCircle: React.FC<MinaLetterHCircleProps>;
export default MinaLetterHCircle;
