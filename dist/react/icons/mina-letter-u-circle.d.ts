import React from 'react';

export interface MinaLetterUCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUCircle: React.FC<MinaLetterUCircleProps>;
export default MinaLetterUCircle;
