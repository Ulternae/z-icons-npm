import React from 'react';

export interface MinaLetterTProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterT: React.FC<MinaLetterTProps>;
export default MinaLetterT;
