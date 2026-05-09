import React from 'react';

export interface MinaZeroHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroHexagonSolid: React.FC<MinaZeroHexagonSolidProps>;
export default MinaZeroHexagonSolid;
