import React from 'react';

export interface MinaLetterOOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterOOctagonSolid: React.FC<MinaLetterOOctagonSolidProps>;
export default MinaLetterOOctagonSolid;
