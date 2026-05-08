import React from 'react';

export interface MinaLetterNOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNOctagonSolid: React.FC<MinaLetterNOctagonSolidProps>;
export default MinaLetterNOctagonSolid;
