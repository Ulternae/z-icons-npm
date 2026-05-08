import React from 'react';

export interface MinaLockHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockHexagonSolid: React.FC<MinaLockHexagonSolidProps>;
export default MinaLockHexagonSolid;
