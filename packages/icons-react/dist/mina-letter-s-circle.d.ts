import React from 'react';

export interface MinaLetterSCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSCircle: React.FC<MinaLetterSCircleProps>;
export default MinaLetterSCircle;
