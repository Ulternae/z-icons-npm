import React from 'react';

export interface MinaLetterWHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterWHexagonSolid: React.FC<MinaLetterWHexagonSolidProps>;
export default MinaLetterWHexagonSolid;
