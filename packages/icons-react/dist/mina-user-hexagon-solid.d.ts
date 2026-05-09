import React from 'react';

export interface MinaUserHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserHexagonSolid: React.FC<MinaUserHexagonSolidProps>;
export default MinaUserHexagonSolid;
