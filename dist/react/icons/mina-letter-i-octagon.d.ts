import React from 'react';

export interface MinaLetterIOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterIOctagon: React.FC<MinaLetterIOctagonProps>;
export default MinaLetterIOctagon;
