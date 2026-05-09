import React from 'react';

export interface MinaPauseHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseHexagonSolid: React.FC<MinaPauseHexagonSolidProps>;
export default MinaPauseHexagonSolid;
