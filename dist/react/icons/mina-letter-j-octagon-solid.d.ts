import React from 'react';

export interface MinaLetterJOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJOctagonSolid: React.FC<MinaLetterJOctagonSolidProps>;
export default MinaLetterJOctagonSolid;
