import React from 'react';

export interface MinaLetterFProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterF: React.FC<MinaLetterFProps>;
export default MinaLetterF;
