import React from 'react';

export interface MinaLetterWCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterWCircle: React.FC<MinaLetterWCircleProps>;
export default MinaLetterWCircle;
