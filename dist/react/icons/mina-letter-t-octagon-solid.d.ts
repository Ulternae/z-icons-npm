import React from 'react';

export interface MinaLetterTOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTOctagonSolid: React.FC<MinaLetterTOctagonSolidProps>;
export default MinaLetterTOctagonSolid;
