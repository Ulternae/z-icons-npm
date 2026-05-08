import React from 'react';

export interface MinaLetterEOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterEOctagon: React.FC<MinaLetterEOctagonProps>;
export default MinaLetterEOctagon;
