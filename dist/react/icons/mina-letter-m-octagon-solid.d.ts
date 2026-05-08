import React from 'react';

export interface MinaLetterMOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMOctagonSolid: React.FC<MinaLetterMOctagonSolidProps>;
export default MinaLetterMOctagonSolid;
