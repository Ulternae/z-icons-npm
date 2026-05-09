import React from 'react';

export interface MinaLetterLProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterL: React.FC<MinaLetterLProps>;
export default MinaLetterL;
