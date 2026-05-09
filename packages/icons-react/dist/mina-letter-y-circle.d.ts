import React from 'react';

export interface MinaLetterYCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterYCircle: React.FC<MinaLetterYCircleProps>;
export default MinaLetterYCircle;
