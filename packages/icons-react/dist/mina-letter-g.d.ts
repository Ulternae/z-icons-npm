import React from 'react';

export interface MinaLetterGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterG: React.FC<MinaLetterGProps>;
export default MinaLetterG;
