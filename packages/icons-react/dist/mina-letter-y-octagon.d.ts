import React from 'react';

export interface MinaLetterYOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterYOctagon: React.FC<MinaLetterYOctagonProps>;
export default MinaLetterYOctagon;
