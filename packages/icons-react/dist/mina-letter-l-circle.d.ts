import React from 'react';

export interface MinaLetterLCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterLCircle: React.FC<MinaLetterLCircleProps>;
export default MinaLetterLCircle;
