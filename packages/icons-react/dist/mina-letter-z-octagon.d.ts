import React from 'react';

export interface MinaLetterZOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZOctagon: React.FC<MinaLetterZOctagonProps>;
export default MinaLetterZOctagon;
