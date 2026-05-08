import React from 'react';

export interface MinaPercentageHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageHexagonSolid: React.FC<MinaPercentageHexagonSolidProps>;
export default MinaPercentageHexagonSolid;
