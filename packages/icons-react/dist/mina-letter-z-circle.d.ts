import React from 'react';

export interface MinaLetterZCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZCircle: React.FC<MinaLetterZCircleProps>;
export default MinaLetterZCircle;
