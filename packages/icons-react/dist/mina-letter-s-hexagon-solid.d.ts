import React from 'react';

export interface MinaLetterSHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSHexagonSolid: React.FC<MinaLetterSHexagonSolidProps>;
export default MinaLetterSHexagonSolid;
