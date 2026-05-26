import React from 'react';

export interface LanHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonSolid: React.FC<LanHexagonSolidProps>;
export default LanHexagonSolid;
