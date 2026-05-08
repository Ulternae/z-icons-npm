import React from 'react';

export interface MinaLetterKHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterKHexagonSolid: React.FC<MinaLetterKHexagonSolidProps>;
export default MinaLetterKHexagonSolid;
