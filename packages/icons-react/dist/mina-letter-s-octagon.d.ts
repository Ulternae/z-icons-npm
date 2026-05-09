import React from 'react';

export interface MinaLetterSOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSOctagon: React.FC<MinaLetterSOctagonProps>;
export default MinaLetterSOctagon;
