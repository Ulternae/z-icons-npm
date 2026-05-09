import React from 'react';

export interface MinaLetterHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHSolid: React.FC<MinaLetterHSolidProps>;
export default MinaLetterHSolid;
