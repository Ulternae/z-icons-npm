import React from 'react';

export interface MinaLetterGCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterGCircle: React.FC<MinaLetterGCircleProps>;
export default MinaLetterGCircle;
