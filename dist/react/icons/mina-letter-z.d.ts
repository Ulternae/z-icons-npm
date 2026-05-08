import React from 'react';

export interface MinaLetterZProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZ: React.FC<MinaLetterZProps>;
export default MinaLetterZ;
