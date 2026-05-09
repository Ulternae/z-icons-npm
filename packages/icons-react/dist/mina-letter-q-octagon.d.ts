import React from 'react';

export interface MinaLetterQOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterQOctagon: React.FC<MinaLetterQOctagonProps>;
export default MinaLetterQOctagon;
