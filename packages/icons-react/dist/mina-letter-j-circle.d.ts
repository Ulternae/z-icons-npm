import React from 'react';

export interface MinaLetterJCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJCircle: React.FC<MinaLetterJCircleProps>;
export default MinaLetterJCircle;
