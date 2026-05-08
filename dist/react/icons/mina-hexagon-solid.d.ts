import React from 'react';

export interface MinaHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHexagonSolid: React.FC<MinaHexagonSolidProps>;
export default MinaHexagonSolid;
