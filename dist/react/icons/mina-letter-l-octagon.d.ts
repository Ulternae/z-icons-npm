import React from 'react';

export interface MinaLetterLOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterLOctagon: React.FC<MinaLetterLOctagonProps>;
export default MinaLetterLOctagon;
