import React from 'react';

export interface MinaFiveHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveHexagonSolid: React.FC<MinaFiveHexagonSolidProps>;
export default MinaFiveHexagonSolid;
