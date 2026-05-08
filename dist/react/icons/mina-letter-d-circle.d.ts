import React from 'react';

export interface MinaLetterDCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDCircle: React.FC<MinaLetterDCircleProps>;
export default MinaLetterDCircle;
