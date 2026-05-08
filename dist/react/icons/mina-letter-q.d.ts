import React from 'react';

export interface MinaLetterQProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterQ: React.FC<MinaLetterQProps>;
export default MinaLetterQ;
