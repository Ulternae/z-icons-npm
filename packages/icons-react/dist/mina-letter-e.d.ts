import React from 'react';

export interface MinaLetterEProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterE: React.FC<MinaLetterEProps>;
export default MinaLetterE;
