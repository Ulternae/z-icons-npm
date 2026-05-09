import React from 'react';

export interface MinaLetterFOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterFOctagon: React.FC<MinaLetterFOctagonProps>;
export default MinaLetterFOctagon;
