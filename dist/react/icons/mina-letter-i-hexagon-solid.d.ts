import React from 'react';

export interface MinaLetterIHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterIHexagonSolid: React.FC<MinaLetterIHexagonSolidProps>;
export default MinaLetterIHexagonSolid;
