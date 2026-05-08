import React from 'react';

export interface MinaHashHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashHexagonSolid: React.FC<MinaHashHexagonSolidProps>;
export default MinaHashHexagonSolid;
