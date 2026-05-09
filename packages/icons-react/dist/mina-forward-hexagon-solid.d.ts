import React from 'react';

export interface MinaForwardHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardHexagonSolid: React.FC<MinaForwardHexagonSolidProps>;
export default MinaForwardHexagonSolid;
