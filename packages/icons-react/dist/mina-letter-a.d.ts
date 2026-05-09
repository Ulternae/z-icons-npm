import React from 'react';

export interface MinaLetterAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterA: React.FC<MinaLetterAProps>;
export default MinaLetterA;
