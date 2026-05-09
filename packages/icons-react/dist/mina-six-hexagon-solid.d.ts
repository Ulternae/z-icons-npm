import React from 'react';

export interface MinaSixHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixHexagonSolid: React.FC<MinaSixHexagonSolidProps>;
export default MinaSixHexagonSolid;
