import React from 'react';

export interface MinaSignalHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalHexagonSolid: React.FC<MinaSignalHexagonSolidProps>;
export default MinaSignalHexagonSolid;
