import React from 'react';

export interface MinaLetterDOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDOctagonSolid: React.FC<MinaLetterDOctagonSolidProps>;
export default MinaLetterDOctagonSolid;
