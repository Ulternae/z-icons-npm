import React from 'react';

export interface MinaDollarHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDollarHexagonSolid: React.FC<MinaDollarHexagonSolidProps>;
export default MinaDollarHexagonSolid;
