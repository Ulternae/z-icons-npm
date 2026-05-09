import React from 'react';

export interface MinaLetterBHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBHexagonSolid: React.FC<MinaLetterBHexagonSolidProps>;
export default MinaLetterBHexagonSolid;
