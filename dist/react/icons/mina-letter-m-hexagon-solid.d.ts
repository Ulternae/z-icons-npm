import React from 'react';

export interface MinaLetterMHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMHexagonSolid: React.FC<MinaLetterMHexagonSolidProps>;
export default MinaLetterMHexagonSolid;
