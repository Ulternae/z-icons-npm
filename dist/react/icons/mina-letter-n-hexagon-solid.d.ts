import React from 'react';

export interface MinaLetterNHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNHexagonSolid: React.FC<MinaLetterNHexagonSolidProps>;
export default MinaLetterNHexagonSolid;
