import React from 'react';

export interface MinaLetterFOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterFOctagonSolid: React.FC<MinaLetterFOctagonSolidProps>;
export default MinaLetterFOctagonSolid;
