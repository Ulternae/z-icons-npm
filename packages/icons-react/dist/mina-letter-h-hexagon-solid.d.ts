import React from 'react';

export interface MinaLetterHHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHHexagonSolid: React.FC<MinaLetterHHexagonSolidProps>;
export default MinaLetterHHexagonSolid;
