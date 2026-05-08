import React from 'react';

export interface MinaLetterVCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVCircle: React.FC<MinaLetterVCircleProps>;
export default MinaLetterVCircle;
