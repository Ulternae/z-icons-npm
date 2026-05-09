import React from 'react';

export interface MinaYenHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenHexagonSolid: React.FC<MinaYenHexagonSolidProps>;
export default MinaYenHexagonSolid;
