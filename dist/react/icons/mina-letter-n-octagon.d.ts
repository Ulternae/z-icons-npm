import React from 'react';

export interface MinaLetterNOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNOctagon: React.FC<MinaLetterNOctagonProps>;
export default MinaLetterNOctagon;
