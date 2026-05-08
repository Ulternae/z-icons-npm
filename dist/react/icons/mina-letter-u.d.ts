import React from 'react';

export interface MinaLetterUProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterU: React.FC<MinaLetterUProps>;
export default MinaLetterU;
