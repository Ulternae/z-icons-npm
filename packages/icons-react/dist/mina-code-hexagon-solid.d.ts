import React from 'react';

export interface MinaCodeHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeHexagonSolid: React.FC<MinaCodeHexagonSolidProps>;
export default MinaCodeHexagonSolid;
