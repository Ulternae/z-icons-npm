import React from 'react';

export interface MinaLetterKOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterKOctagon: React.FC<MinaLetterKOctagonProps>;
export default MinaLetterKOctagon;
