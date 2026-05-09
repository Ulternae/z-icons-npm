import React from 'react';

export interface MinaLetterXOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterXOctagonSolid: React.FC<MinaLetterXOctagonSolidProps>;
export default MinaLetterXOctagonSolid;
