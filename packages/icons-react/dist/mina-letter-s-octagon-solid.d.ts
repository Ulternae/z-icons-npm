import React from 'react';

export interface MinaLetterSOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSOctagonSolid: React.FC<MinaLetterSOctagonSolidProps>;
export default MinaLetterSOctagonSolid;
