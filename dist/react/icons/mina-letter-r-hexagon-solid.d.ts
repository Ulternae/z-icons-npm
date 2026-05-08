import React from 'react';

export interface MinaLetterRHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterRHexagonSolid: React.FC<MinaLetterRHexagonSolidProps>;
export default MinaLetterRHexagonSolid;
