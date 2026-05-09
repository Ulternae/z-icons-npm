import React from 'react';

export interface MinaNineHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineHexagonSolid: React.FC<MinaNineHexagonSolidProps>;
export default MinaNineHexagonSolid;
