import React from 'react';

export interface MinaLetterBOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBOctagon: React.FC<MinaLetterBOctagonProps>;
export default MinaLetterBOctagon;
