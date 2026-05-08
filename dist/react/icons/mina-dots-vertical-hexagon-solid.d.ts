import React from 'react';

export interface MinaDotsVerticalHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalHexagonSolid: React.FC<MinaDotsVerticalHexagonSolidProps>;
export default MinaDotsVerticalHexagonSolid;
