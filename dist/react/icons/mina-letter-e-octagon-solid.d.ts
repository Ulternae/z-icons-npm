import React from 'react';

export interface MinaLetterEOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterEOctagonSolid: React.FC<MinaLetterEOctagonSolidProps>;
export default MinaLetterEOctagonSolid;
