import React from 'react';

export interface MinaLetterECircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterECircle: React.FC<MinaLetterECircleProps>;
export default MinaLetterECircle;
