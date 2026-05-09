import React from 'react';

export interface MinaLetterMCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMCircle: React.FC<MinaLetterMCircleProps>;
export default MinaLetterMCircle;
