import React from 'react';

export interface MinaLetterWOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterWOctagonSolid: React.FC<MinaLetterWOctagonSolidProps>;
export default MinaLetterWOctagonSolid;
