import React from 'react';

export interface MinaLetterVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterV: React.FC<MinaLetterVProps>;
export default MinaLetterV;
