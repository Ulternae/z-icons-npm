import React from 'react';

export interface MinaLetterCOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCOctagon: React.FC<MinaLetterCOctagonProps>;
export default MinaLetterCOctagon;
