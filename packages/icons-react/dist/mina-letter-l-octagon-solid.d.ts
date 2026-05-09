import React from 'react';

export interface MinaLetterLOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterLOctagonSolid: React.FC<MinaLetterLOctagonSolidProps>;
export default MinaLetterLOctagonSolid;
