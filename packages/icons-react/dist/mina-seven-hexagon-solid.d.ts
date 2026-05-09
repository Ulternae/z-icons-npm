import React from 'react';

export interface MinaSevenHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenHexagonSolid: React.FC<MinaSevenHexagonSolidProps>;
export default MinaSevenHexagonSolid;
