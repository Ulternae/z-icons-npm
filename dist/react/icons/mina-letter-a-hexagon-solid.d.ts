import React from 'react';

export interface MinaLetterAHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterAHexagonSolid: React.FC<MinaLetterAHexagonSolidProps>;
export default MinaLetterAHexagonSolid;
