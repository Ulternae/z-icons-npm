import React from 'react';

export interface MinaInfoHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoHexagonSolid: React.FC<MinaInfoHexagonSolidProps>;
export default MinaInfoHexagonSolid;
