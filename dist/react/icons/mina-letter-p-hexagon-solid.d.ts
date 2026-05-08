import React from 'react';

export interface MinaLetterPHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPHexagonSolid: React.FC<MinaLetterPHexagonSolidProps>;
export default MinaLetterPHexagonSolid;
