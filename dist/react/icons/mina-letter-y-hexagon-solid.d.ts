import React from 'react';

export interface MinaLetterYHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterYHexagonSolid: React.FC<MinaLetterYHexagonSolidProps>;
export default MinaLetterYHexagonSolid;
