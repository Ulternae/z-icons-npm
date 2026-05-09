import React from 'react';

export interface MinaLetterJProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJ: React.FC<MinaLetterJProps>;
export default MinaLetterJ;
