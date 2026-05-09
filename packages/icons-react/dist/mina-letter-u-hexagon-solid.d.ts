import React from 'react';

export interface MinaLetterUHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUHexagonSolid: React.FC<MinaLetterUHexagonSolidProps>;
export default MinaLetterUHexagonSolid;
