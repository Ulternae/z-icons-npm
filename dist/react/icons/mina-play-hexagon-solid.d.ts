import React from 'react';

export interface MinaPlayHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlayHexagonSolid: React.FC<MinaPlayHexagonSolidProps>;
export default MinaPlayHexagonSolid;
