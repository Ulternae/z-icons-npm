import React from 'react';

export interface MinaLetterOHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterOHexagonSolid: React.FC<MinaLetterOHexagonSolidProps>;
export default MinaLetterOHexagonSolid;
