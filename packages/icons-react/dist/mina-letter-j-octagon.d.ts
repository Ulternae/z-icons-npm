import React from 'react';

export interface MinaLetterJOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJOctagon: React.FC<MinaLetterJOctagonProps>;
export default MinaLetterJOctagon;
