import React from 'react';

export interface MinaLetterHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterH: React.FC<MinaLetterHProps>;
export default MinaLetterH;
