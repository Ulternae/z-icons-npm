import React from 'react';

export interface MinaLetterOCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterOCircle: React.FC<MinaLetterOCircleProps>;
export default MinaLetterOCircle;
