import React from 'react';

export interface MinaLetterVHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVHexagonSolid: React.FC<MinaLetterVHexagonSolidProps>;
export default MinaLetterVHexagonSolid;
