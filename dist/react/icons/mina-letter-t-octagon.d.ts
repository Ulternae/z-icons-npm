import React from 'react';

export interface MinaLetterTOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTOctagon: React.FC<MinaLetterTOctagonProps>;
export default MinaLetterTOctagon;
