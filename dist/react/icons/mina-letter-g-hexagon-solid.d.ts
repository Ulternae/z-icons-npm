import React from 'react';

export interface MinaLetterGHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterGHexagonSolid: React.FC<MinaLetterGHexagonSolidProps>;
export default MinaLetterGHexagonSolid;
