import React from 'react';

export interface MinaEuroHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroHexagonSolid: React.FC<MinaEuroHexagonSolidProps>;
export default MinaEuroHexagonSolid;
