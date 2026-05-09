import React from 'react';

export interface MinaEightHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightHexagonSolid: React.FC<MinaEightHexagonSolidProps>;
export default MinaEightHexagonSolid;
