import React from 'react';

export interface MinaLetterRSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterRSolid: React.FC<MinaLetterRSolidProps>;
export default MinaLetterRSolid;
