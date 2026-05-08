import React from 'react';

export interface MinaLetterTHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTHexagonSolid: React.FC<MinaLetterTHexagonSolidProps>;
export default MinaLetterTHexagonSolid;
