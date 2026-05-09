import React from 'react';

export interface MinaTwoHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoHexagonSolid: React.FC<MinaTwoHexagonSolidProps>;
export default MinaTwoHexagonSolid;
