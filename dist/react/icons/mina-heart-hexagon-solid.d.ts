import React from 'react';

export interface MinaHeartHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartHexagonSolid: React.FC<MinaHeartHexagonSolidProps>;
export default MinaHeartHexagonSolid;
