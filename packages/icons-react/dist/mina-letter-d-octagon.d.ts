import React from 'react';

export interface MinaLetterDOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDOctagon: React.FC<MinaLetterDOctagonProps>;
export default MinaLetterDOctagon;
