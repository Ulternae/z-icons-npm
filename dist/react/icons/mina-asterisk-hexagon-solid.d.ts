import React from 'react';

export interface MinaAsteriskHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskHexagonSolid: React.FC<MinaAsteriskHexagonSolidProps>;
export default MinaAsteriskHexagonSolid;
