import React from 'react';

export interface MinaLetterLHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterLHexagonSolid: React.FC<MinaLetterLHexagonSolidProps>;
export default MinaLetterLHexagonSolid;
