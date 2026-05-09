import React from 'react';

export interface MinaBitcoinHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinHexagonSolid: React.FC<MinaBitcoinHexagonSolidProps>;
export default MinaBitcoinHexagonSolid;
