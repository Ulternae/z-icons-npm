import React from 'react';

export interface MinaLetterGOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterGOctagonSolid: React.FC<MinaLetterGOctagonSolidProps>;
export default MinaLetterGOctagonSolid;
