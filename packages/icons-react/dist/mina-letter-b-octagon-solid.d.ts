import React from 'react';

export interface MinaLetterBOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBOctagonSolid: React.FC<MinaLetterBOctagonSolidProps>;
export default MinaLetterBOctagonSolid;
