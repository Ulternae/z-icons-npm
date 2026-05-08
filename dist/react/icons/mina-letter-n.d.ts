import React from 'react';

export interface MinaLetterNProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterN: React.FC<MinaLetterNProps>;
export default MinaLetterN;
