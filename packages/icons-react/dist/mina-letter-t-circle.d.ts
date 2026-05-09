import React from 'react';

export interface MinaLetterTCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTCircle: React.FC<MinaLetterTCircleProps>;
export default MinaLetterTCircle;
