import React from 'react';

export interface MinaLetterXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterX: React.FC<MinaLetterXProps>;
export default MinaLetterX;
