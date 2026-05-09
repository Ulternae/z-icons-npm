import React from 'react';

export interface MinaOneHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneHexagonSolid: React.FC<MinaOneHexagonSolidProps>;
export default MinaOneHexagonSolid;
