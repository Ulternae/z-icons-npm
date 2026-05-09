import React from 'react';

export interface MinaLetterZHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZHexagonSolid: React.FC<MinaLetterZHexagonSolidProps>;
export default MinaLetterZHexagonSolid;
