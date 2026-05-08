import React from 'react';

export interface MinaLetterRCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterRCircle: React.FC<MinaLetterRCircleProps>;
export default MinaLetterRCircle;
