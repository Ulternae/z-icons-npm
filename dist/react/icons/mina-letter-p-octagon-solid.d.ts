import React from 'react';

export interface MinaLetterPOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPOctagonSolid: React.FC<MinaLetterPOctagonSolidProps>;
export default MinaLetterPOctagonSolid;
