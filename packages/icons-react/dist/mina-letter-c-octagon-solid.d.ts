import React from 'react';

export interface MinaLetterCOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCOctagonSolid: React.FC<MinaLetterCOctagonSolidProps>;
export default MinaLetterCOctagonSolid;
