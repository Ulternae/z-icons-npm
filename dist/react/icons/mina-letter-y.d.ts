import React from 'react';

export interface MinaLetterYProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterY: React.FC<MinaLetterYProps>;
export default MinaLetterY;
