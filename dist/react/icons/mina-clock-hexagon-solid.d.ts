import React from 'react';

export interface MinaClockHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockHexagonSolid: React.FC<MinaClockHexagonSolidProps>;
export default MinaClockHexagonSolid;
