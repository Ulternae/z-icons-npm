import React from 'react';

export interface MinaFourHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourHexagonSolid: React.FC<MinaFourHexagonSolidProps>;
export default MinaFourHexagonSolid;
