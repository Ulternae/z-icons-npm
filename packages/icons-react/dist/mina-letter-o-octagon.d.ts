import React from 'react';

export interface MinaLetterOOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterOOctagon: React.FC<MinaLetterOOctagonProps>;
export default MinaLetterOOctagon;
