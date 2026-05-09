import React from 'react';

export interface MinaLetterQHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterQHexagonSolid: React.FC<MinaLetterQHexagonSolidProps>;
export default MinaLetterQHexagonSolid;
