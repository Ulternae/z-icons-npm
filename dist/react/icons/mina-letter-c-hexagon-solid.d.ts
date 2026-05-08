import React from 'react';

export interface MinaLetterCHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCHexagonSolid: React.FC<MinaLetterCHexagonSolidProps>;
export default MinaLetterCHexagonSolid;
