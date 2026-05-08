import React from 'react';

export interface MinaLetterOProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterO: React.FC<MinaLetterOProps>;
export default MinaLetterO;
