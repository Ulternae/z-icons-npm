import React from 'react';

export interface MinaLetterDHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDHexagonSolid: React.FC<MinaLetterDHexagonSolidProps>;
export default MinaLetterDHexagonSolid;
