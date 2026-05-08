import React from 'react';

export interface MinaLetterZOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZOctagonSolid: React.FC<MinaLetterZOctagonSolidProps>;
export default MinaLetterZOctagonSolid;
