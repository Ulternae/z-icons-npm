import React from 'react';

export interface MinaLetterWOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterWOctagon: React.FC<MinaLetterWOctagonProps>;
export default MinaLetterWOctagon;
