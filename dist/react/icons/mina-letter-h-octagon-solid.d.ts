import React from 'react';

export interface MinaLetterHOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHOctagonSolid: React.FC<MinaLetterHOctagonSolidProps>;
export default MinaLetterHOctagonSolid;
