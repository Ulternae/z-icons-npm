import React from 'react';

export interface MinaLetterKOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterKOctagonSolid: React.FC<MinaLetterKOctagonSolidProps>;
export default MinaLetterKOctagonSolid;
