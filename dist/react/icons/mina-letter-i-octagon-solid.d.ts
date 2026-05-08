import React from 'react';

export interface MinaLetterIOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterIOctagonSolid: React.FC<MinaLetterIOctagonSolidProps>;
export default MinaLetterIOctagonSolid;
