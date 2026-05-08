import React from 'react';

export interface MinaLetterYOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterYOctagonSolid: React.FC<MinaLetterYOctagonSolidProps>;
export default MinaLetterYOctagonSolid;
