import React from 'react';

export interface MinaLetterHOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHOctagon: React.FC<MinaLetterHOctagonProps>;
export default MinaLetterHOctagon;
