import React from 'react';

export interface MinaRupeeHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeHexagonSolid: React.FC<MinaRupeeHexagonSolidProps>;
export default MinaRupeeHexagonSolid;
