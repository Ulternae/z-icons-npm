import React from 'react';

export interface MinaLetterFCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterFCircle: React.FC<MinaLetterFCircleProps>;
export default MinaLetterFCircle;
