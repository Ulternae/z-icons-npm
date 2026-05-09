import React from 'react';

export interface MinaLetterUOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUOctagonSolid: React.FC<MinaLetterUOctagonSolidProps>;
export default MinaLetterUOctagonSolid;
