import React from 'react';

export interface MinaDotsHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsHexagonSolid: React.FC<MinaDotsHexagonSolidProps>;
export default MinaDotsHexagonSolid;
