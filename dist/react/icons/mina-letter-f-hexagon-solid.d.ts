import React from 'react';

export interface MinaLetterFHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterFHexagonSolid: React.FC<MinaLetterFHexagonSolidProps>;
export default MinaLetterFHexagonSolid;
