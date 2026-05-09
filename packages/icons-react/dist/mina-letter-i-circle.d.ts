import React from 'react';

export interface MinaLetterICircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterICircle: React.FC<MinaLetterICircleProps>;
export default MinaLetterICircle;
