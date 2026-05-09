import React from 'react';

export interface MinaLetterMOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMOctagon: React.FC<MinaLetterMOctagonProps>;
export default MinaLetterMOctagon;
