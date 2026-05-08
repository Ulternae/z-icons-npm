import React from 'react';

export interface MinaLetterSProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterS: React.FC<MinaLetterSProps>;
export default MinaLetterS;
