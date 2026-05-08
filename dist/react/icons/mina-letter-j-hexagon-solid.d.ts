import React from 'react';

export interface MinaLetterJHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJHexagonSolid: React.FC<MinaLetterJHexagonSolidProps>;
export default MinaLetterJHexagonSolid;
