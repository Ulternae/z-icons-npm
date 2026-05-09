import React from 'react';

export interface MinaLetterBProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterB: React.FC<MinaLetterBProps>;
export default MinaLetterB;
