import React from 'react';

export interface MinaThreeHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeHexagonSolid: React.FC<MinaThreeHexagonSolidProps>;
export default MinaThreeHexagonSolid;
