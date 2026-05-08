import React from 'react';

export interface MinaLetterNSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNSolid: React.FC<MinaLetterNSolidProps>;
export default MinaLetterNSolid;
