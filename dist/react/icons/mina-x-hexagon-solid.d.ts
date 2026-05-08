import React from 'react';

export interface MinaXHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXHexagonSolid: React.FC<MinaXHexagonSolidProps>;
export default MinaXHexagonSolid;
