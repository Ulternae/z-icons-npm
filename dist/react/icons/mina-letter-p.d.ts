import React from 'react';

export interface MinaLetterPProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterP: React.FC<MinaLetterPProps>;
export default MinaLetterP;
