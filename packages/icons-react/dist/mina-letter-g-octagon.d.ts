import React from 'react';

export interface MinaLetterGOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterGOctagon: React.FC<MinaLetterGOctagonProps>;
export default MinaLetterGOctagon;
