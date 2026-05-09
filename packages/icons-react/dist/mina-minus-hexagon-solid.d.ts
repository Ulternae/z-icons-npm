import React from 'react';

export interface MinaMinusHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusHexagonSolid: React.FC<MinaMinusHexagonSolidProps>;
export default MinaMinusHexagonSolid;
