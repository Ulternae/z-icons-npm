import React from 'react';

export interface MinaMusicHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicHexagonSolid: React.FC<MinaMusicHexagonSolidProps>;
export default MinaMusicHexagonSolid;
