import React from 'react';

export interface MinaLetterQCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterQCircle: React.FC<MinaLetterQCircleProps>;
export default MinaLetterQCircle;
