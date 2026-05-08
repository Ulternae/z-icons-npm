import React from 'react';

export interface MinaLetterKProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterK: React.FC<MinaLetterKProps>;
export default MinaLetterK;
