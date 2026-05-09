import React from 'react';

export interface MinaStopHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopHexagonSolid: React.FC<MinaStopHexagonSolidProps>;
export default MinaStopHexagonSolid;
