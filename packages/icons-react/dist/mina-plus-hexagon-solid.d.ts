import React from 'react';

export interface MinaPlusHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusHexagonSolid: React.FC<MinaPlusHexagonSolidProps>;
export default MinaPlusHexagonSolid;
